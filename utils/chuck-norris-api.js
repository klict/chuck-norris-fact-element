export const chuckNorrisApi = {
    sendRequest(url) {
        return new Promise((resolve, reject) => {
            const httpRequest = new XMLHttpRequest();

            httpRequest.onreadystatechange = ev => {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        resolve(JSON.parse(httpRequest.responseText));
                    }

                    reject(httpRequest.responseText);
                }
            };

            httpRequest.open('GET', url);
            httpRequest.send();
        });
    },
    getRandomJoke() {
        return this.sendRequest('https://api.chucknorris.io/jokes/random');
    },
    getJokeFromCategory(category) {
        return this.sendRequest(`https://api.chucknorris.io/jokes/random?category=${category}`);
    }
};

