/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { ReactComponent as Logo } from '../../assets/next.svg';
import { STRINGS, describeSpaceShip } from './constants';

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
    cardModel,
    cardCargoCapacity,
} = styles;

const SpaceShipCard = ({
    name,
    image,
    model,
    length,
    starship_class,
    cargo_capacity,
    manufacturer,
}) => (
    <div className={cardContainer}>
        <div className={cardImageContainer}>
            <img src={image} alt="character" className={cardImage} />
        </div>
        <div className={cardTextContainer}>
            <p className={cardTitle}>{name}</p>
            <p className={cardText}>
                {
                    describeSpaceShip(
                        length,
                        model,
                        starship_class,
                        cargo_capacity,
                        manufacturer,
                    )
                }
            </p>
            <a href="#" className={cardButton}>
                {READ_MORE}
                <Logo className={readmoreButton} />
            </a>

        </div>
    </div>
);

SpaceShipCard.propTypes = {
    cargo_capacity: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    starship_class: PropTypes.string.isRequired,
};

export default SpaceShipCard;
