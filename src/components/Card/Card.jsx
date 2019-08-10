import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import image from '../../assets/starship-1.jpg';
import { ReactComponent as Logo } from '../../assets/next.svg';

const {
    cardContainer,
    cardTitle,
    cardText,
    cardButton,
    cardImage,
    cardTextContainer,
    readmoreButton,
} = styles;

const Card = () => (
    <div className={cardContainer}>
        <img src={image} alt="character" className={cardImage} />
        <div className={cardTextContainer}>
            <p className={cardTitle}>Anger</p>
            <p className={cardText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repudiandae?
            </p>

            <a href="#" className={cardButton}>
                Read more
                {/* <img className={readmoreButton} src={next} alt="read-more" /> */}
                <Logo className={readmoreButton} />
            </a>

        </div>
    </div>
);

Card.propTypes = {

};

export default Card;
