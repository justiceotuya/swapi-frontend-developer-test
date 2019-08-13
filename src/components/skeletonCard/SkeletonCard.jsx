import React from 'react';

import styles from './SkeletonCard.module.css';

const {
    skeletonCardContainer,
    skeletonCardTitle,
    skeletonCardText,
    skeletonCardFinalText,
    skeletonCardButton,
    skeletonCardImage,
    skeletonCardTextContainer,
} = styles;

const SkeletonCard = () => (
    <div className={skeletonCardContainer}>
        <span className={skeletonCardImage} />
        <div className={skeletonCardTextContainer}>
            <span className={skeletonCardTitle} />
            <p className={skeletonCardText} />
            <p className={skeletonCardText} />
            <p className={skeletonCardFinalText} />
            <span className={skeletonCardButton} />

        </div>
    </div>
);

SkeletonCard.propTypes = {

};

export default SkeletonCard;
