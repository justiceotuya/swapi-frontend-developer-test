import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { ReactComponent as Logo } from '../../assets/next.svg';
import { STRINGS } from './constants';

const { READ_MORE } = STRINGS;
const {
    cardContainer,
    cardTitle,
    cardText,
    cardButton,
    cardImage,
    cardImageContainer,
    cardTextContainer,
    readmoreButton,
} = styles;

const Card = ({ title, details, image }) => (
    <div className={cardContainer}>
        <div className={cardImageContainer}>
            <img src={image} alt="character" className={cardImage} />
        </div>
        <div className={cardTextContainer}>
            <p className={cardTitle}>{title}</p>
            <p className={cardText}>
                {details}
            </p>
            <a href="#" className={cardButton}>
                {READ_MORE}
                <Logo className={readmoreButton} />
            </a>

        </div>
    </div>
);

Card.propTypes = {
    details: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
