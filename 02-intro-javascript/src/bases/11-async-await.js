// Async - await

const getImage = async () => {

    try {
        const api_key = 'ryryBQQHHBWSRuDV6QJaHUOt69jskdDi';
        const http = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await http.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // error handling
        console.error(error);
    }
}

getImage();