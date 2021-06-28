// Fetch API

// change for your own api key
const api_key = 'ryryBQQHHBWSRuDV6QJaHUOt69jskdDi';

const http = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

http
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);