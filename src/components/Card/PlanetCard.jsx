/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { describePlanet } from './constants';
import styles from './Card.module.css';

const {
    planetCardContainer,
    planetCardImage,
    planetCardTextContainer,
    planetCardTextName,
    planetCardTextDescription,
} = styles;

const PlanetCards = props => {
    const { image, name } = props;
    return (
        <div className={planetCardContainer}>
            <img src={image} alt="character" className={planetCardImage} />
            <div className={planetCardTextContainer}>
                <p className={planetCardTextName}>{name}</p>
                <p className={planetCardTextDescription}>{describePlanet(props)}</p>
            </div>
        </div>
    );
};

PlanetCards.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default PlanetCards;
