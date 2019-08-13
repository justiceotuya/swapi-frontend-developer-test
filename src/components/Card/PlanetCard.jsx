/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Card.module.css';

const { cardContainer, cardImage } = styles;

const PlanetCards = ({ image }) => (
    <div className={cardContainer}>
        <img src={image} alt="character" className={cardImage} />
    </div>
);

PlanetCards.propTypes = {
    image: PropTypes.string.isRequired,
};

export default PlanetCards;
