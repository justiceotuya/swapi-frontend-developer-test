/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as Logo } from '../../assets/next.svg';
import { STRINGS, describeSpaceShip } from './constants';
import styles from './Card.module.css';

const { READ_MORE } = STRINGS;
const {
    spaceCardContainer,
    spaceCardTitle,
    spaceCardText,
    spaceCardButton,
    cardImage,
    spaceCardImageContainer,
    spaceCardTextContainer,
    readmoreButton,
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
    <div className={spaceCardContainer}>
        <div className={spaceCardImageContainer}>
            <img src={image} alt="character" className={cardImage} />
        </div>
        <div className={spaceCardTextContainer}>
            <p className={spaceCardTitle}>{name}</p>
            <p className={spaceCardText}>
                {
                    describeSpaceShip(
                        length,
                        name,
                        model,
                        starship_class,
                        cargo_capacity,
                        manufacturer,
                    )
                }
            </p>
            <a href="#" className={spaceCardButton}>
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
