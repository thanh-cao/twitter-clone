export const getAllTweets = async () => {
    return fetch('/tweets', {
        credentials: 'include'
    }).then(res => res.json());
}

export const createTweet = async (message) => {
    return fetch('/tweets/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    }).then(res => res.json());
}