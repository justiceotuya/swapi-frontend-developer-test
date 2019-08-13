/* eslint-disable camelcase */
const starship1 = require('../../assets/starship-1.jpg');
const starship2 = require('../../assets/starship-2.jpg');
const starship3 = require('../../assets/starship-3.jpg');
const starship4 = require('../../assets/starship-4.jpg');
const starship5 = require('../../assets/starship-5.jpg');
const starship6 = require('../../assets/starship-6.jpg');
const planet1 = require('../../assets/planet-1.jpg');
const planet2 = require('../../assets/planet-2.jpg');
const planet3 = require('../../assets/planet-3.jpg');
const character1 = require('../../assets/character-1.jpg');
const character2 = require('../../assets/character-2.jpg');
const character3 = require('../../assets/character-3.jpg');
const character4 = require('../../assets/character-4.jpg');

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

export const STRINGS = {
    POPULAR_CHARACTERS: 'Popular Characters',
    POPULAR_SPACESHIPS: 'Popular Spaceships',
    VIEW_MORE: 'VIEW MORE',
};
