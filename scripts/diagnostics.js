const Request = require('request');

function postToHastebin(text) {
    return new Promise((resolve, reject) => {
        Request.post({
            uri: 'https://hastebin.com/documents',
            body: text,
        }, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject(error);
            } else {
                resolve(`https://hastebin.com/${JSON.parse(body).key.toString()}`);
            }
        });
    });
}