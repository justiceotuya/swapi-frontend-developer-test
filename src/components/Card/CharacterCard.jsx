/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

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
    data,
    handleOpenItemDetail,
    image,
}) => {
    const {
        name,
        gender,
        birthYear,
    } = data;

    return (
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
                    <Link
                        to={{
                            data,
                            image,
                            pathname: `/person/${name}`,
                        }}
                        role="button"
                        tabIndex="-1"
                        className={characterCardReadmoreLink}
                        onClick={(e, data) => handleOpenItemDetail(data)}
                    >

                        {READ_MORE}
                    </Link>
                </p>

            </div>
        </div>
    );
};

CharacterCard.propTypes = {
    data: PropTypes.shape({
        birthYear: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    handleOpenItemDetail: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
};

export default CharacterCard;
