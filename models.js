if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
};

const { Sequelize, DataTypes } = require('sequelize');

const dialectOptions = process.env.NODE_ENV !== "production" ? null : {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
};

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: dialectOptions
});

async function initDB() {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    // await sequelize.sync({ force: true });
};

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    salt: {
        type: DataTypes.BLOB,
        allowNull: false
    }
});

const Tweet = sequelize.define('Tweet', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

User.hasMany(Tweet, { foreignKey: 'userId' });
Tweet.belongsTo(User, { targetKey: "id", foreignKey: "userId" });

module.exports = { initDB, sequelize, User, Tweet };