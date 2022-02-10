module.exports.loginUser = async (username, password) => {
    return fetch('/users/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(res => res.json());
}

module.exports.register = async (name, username, password) => {
    return fetch('/users/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            username,
            password
        })
    }).then(res => res.json());
}

module.exports.logout = async () => {
    return fetch('/users/logout', {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

module.exports.authenticateUser = async () => {
    return fetch('/users/authenticate', {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}