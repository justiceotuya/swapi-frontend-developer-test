/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

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
    image,
    data,
}) => {
    const {
        name,
        length,
        model,
        starship_class,
        cargo_capacity,
        manufacturer,
    } = data;

    return (
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
                <Link
                    to={{
                        data,
                        image,
                        pathname: `/spaceship/${name}`,
                    }}
                    role="button"
                    tabIndex="-1"
                    className={spaceCardButton}
                >
                    {READ_MORE}
                    <Logo className={readmoreButton} />
                </Link>
            </div>
        </div>
    );
};

SpaceShipCard.propTypes = {
    data: PropTypes.shape({
        cargo_capacity: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        starship_class: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
};

export default SpaceShipCard;
