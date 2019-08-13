import axios from 'axios';

// generate items for the front page
export const getHomePageSection = (data, num) => {
    // create a new array and insert the first result from the api using the number passed as limit
    let newCard = [];
    for (let i = 1; i <= num; i++) {
        newCard = [...newCard, data[i]];
    }
    return newCard;
};

export const getCards = () => {
    let number = [];
    for (let i = 0; i < 3; i++) {
        number = [...number, i];
    }
    return number;
};

export const getImages = (item, index) => {
    let max;
    let SPACESHIPS;
    let PLANET;
    let CHARACTER;

    if (item === SPACESHIPS) {
        max = 6;
    } else if (item === PLANET) {
        max = 3;
    } else if (item === CHARACTER) {
        max = 4;
    }

    let dataUrl;
    item.map(data => {
        if (data.id === index + 1) { dataUrl = data.imageURL; }
        return dataUrl;
    });
    return dataUrl;
};

export const getData = async url => {
    const baseUrl = 'https://swapi.co/api';
    const response = await axios.get(`${baseUrl}/${url}`);
    return response;
};
