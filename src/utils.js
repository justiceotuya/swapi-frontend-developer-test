import axios from 'axios';
/* eslint-disable camelcase */
const starship1 = require('./assets/starship-1.jpg');
const starship2 = require('./assets/starship-2.jpg');
const starship3 = require('./assets/starship-3.jpg');
const starship4 = require('./assets/starship-4.jpg');
const starship5 = require('./assets/starship-5.jpg');
const starship6 = require('./assets/starship-6.jpg');
const planet1 = require('./assets/planet-1.jpg');
const planet2 = require('./assets/planet-2.jpg');
const planet3 = require('./assets/planet-3.jpg');
const character1 = require('./assets/character-1.jpg');
const character2 = require('./assets/character-2.jpg');
const character3 = require('./assets/character-3.jpg');
const character4 = require('./assets/character-4.jpg');

export const SPACESHIPS = [
    {
        id: 1,
        imageURL: starship1,
    }, {
        id: 2,
        imageURL: starship2,
    }, {
        id: 3,
        imageURL: starship3,
    }, {
        id: 4,
        imageURL: starship4,
    }, {
        id: 5,
        imageURL: starship5,
    }, {
        id: 6,
        imageURL: starship6,
    },
];

export const PLANET = [
    {
        id: 1,
        imageURL: planet1,
    }, {
        id: 2,
        imageURL: planet2,
    }, {
        id: 3,
        imageURL: planet3,
    },
];

export const CHARACTER = [
    {
        id: 1,
        imageURL: character1,
    }, {
        id: 2,
        imageURL: character2,
    }, {
        id: 3,
        imageURL: character3,
    }, {
        id: 4,
        imageURL: character4,
    },
];

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

export const getImages = (item, data) => {
    // get a maximmum number which correspond with the number of asset supplied for each item
    let max;
    if (item === SPACESHIPS) {
        max = 6;
    } else if (item === PLANET) {
        max = 3;
    } else if (item === CHARACTER) {
        max = 4;
    }

    let imageSrc;
    const randomNumber = Math.ceil(Math.random() * max);
    // iterate through the passed data, generate a random number from 1 to the maximum number supplied above, then iterate the asset and assign the image whose number corresponds to the generated number
    data.map(datum => {
        item.map(assetObj => {
            const { id, imageURL } = assetObj;
            if (id === randomNumber) { imageSrc = imageURL; }
            return imageSrc;
        });
        // return dataUrl;
    });

    return imageSrc;
};

export const getData = async url => {
    const baseUrl = 'https://swapi.co/api';
    const response = await axios.get(`${baseUrl}/${url}`);
    return response;
};

export const handlePagination = data => {
    const {
        next, results, previous, count,
    } = data;

    // from the next string, get the next page and deduce the current page
    let currentPage;
    let lastItem;
    // when search is
    if (next === null && previous !== null) {
        currentPage = previous + 1;
        lastItem = count;
    } if (results !== undefined && next !== null) {
        const getNextPageFromUrl = next.match(/\d/ig);
        currentPage = getNextPageFromUrl - 1;
        lastItem = currentPage * results.length;
    } if (next === null && previous === null) {
        currentPage = 1;
        lastItem = currentPage * results.length;
    }

    const firstItem = lastItem - (results.length - 1);

    return {
        firstItemCount: firstItem,
        lastItemCount: lastItem,
    };
};

export const handlePaginationControl = (itemData, item, nextOrPrevious, func) => {
    const url = itemData[`${item}`][`${nextOrPrevious}`].split('/api/')[1];
    return item !== null && func(url);
};

export const handleRecentlyViewedItems = location => {
    let recentItems = [];

    if (location.data !== undefined) {
        localStorage.setItem('item', JSON.stringify({ data: location.data, image: location.image }));

        // if local storage  of recent data is empty push this data into it
        if (location.data !== undefined && localStorage.getItem('recentItems') === null) {
            recentItems = [...recentItems, location.data];
            localStorage.setItem('recentItems', JSON.stringify({ recentItems }));
            return recentItems;
        } if (JSON.parse(localStorage.getItem('recentItems')).recentItems.length <= 3) {
            recentItems = [...JSON.parse(localStorage.getItem('recentItems')).recentItems];
            recentItems = [...recentItems, location.data];
            localStorage.setItem('recentItems', JSON.stringify({ recentItems }));
            return recentItems;
        } if (JSON.parse(localStorage.getItem('recentItems')).recentItems.length > 3) {
            recentItems = [...JSON.parse(localStorage.getItem('recentItems')).recentItems];
            recentItems.shift();
            localStorage.setItem('recentItems', JSON.stringify({ recentItems }));
            return recentItems;
        }
    }
};
