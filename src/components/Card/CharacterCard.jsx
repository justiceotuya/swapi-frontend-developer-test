/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Card.module.css';
import { STRINGS } from './constants';

const { READ_MORE, LOREM_FILLER_TEXT } = STRINGS;
const {
    characterCardContainer,
    characterCardImageContainer,
    characterCardImage,
    characterCardTextContainer,
    characterCardTitle,
    characterCardSubTitle,
    characterCardText,
    characterCardReadmoreLink,
} = styles;

const CharacterCard = ({
    name,
    image,
    gender,
    birthYear,
}) => (
    <div className={characterCardContainer}>
        <div className={characterCardImageContainer}>
            <img src={image} alt="character" className={characterCardImage} />
        </div>
        <div className={characterCardTextContainer}>
            <p className={characterCardTitle}>{name}</p>
            <p className={characterCardSubTitle}>{gender}</p>
            <p className={characterCardSubTitle}>{birthYear}</p>
            <p className={characterCardText}>
                {LOREM_FILLER_TEXT}
                <a href="#" className={characterCardReadmoreLink}>
                    {READ_MORE}
                </a>
            </p>

        </div>
    </div>
);

CharacterCard.propTypes = {
    birthYear: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default CharacterCard;
