module.exports = (createdAt) => {
    const currentTimestamp = new Date().getTime() / 1000;
    createdAt = Date.parse(createdAt) / 1000;
    const time = currentTimestamp - createdAt;

    switch (true) {
        case time < 60:
            return `${time} seconds ago`;
        case time < 3600:
            return `${Math.floor(time / 60)} minutes ago`;
        case (time < 86400):
            return `${Math.floor(time / 3600)} hours ago`;
        case time < 604800:
            return `${Math.floor(time / 86400)} days ago`;
        case time < 2592000:
            return `${Math.floor(time / 604800)} weeks ago`;
        case time < 31536000:
            return `${Math.floor(time / 2592000)} months ago`;
        default:
            return `${Math.floor(time / 31536000)} years ago`;
    }
};