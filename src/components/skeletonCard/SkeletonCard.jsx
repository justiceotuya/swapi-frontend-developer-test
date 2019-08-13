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
    peopleSkeletonCardContainer,
    peopleSkeletonCardImage,
    peopleSkeletonCardTextContainer,
    peopleSkeletonCardTitle,
    peopleSkeletonCardText,
    peopleSkeletonCardFinalText,
    peopleSkeletonCardButton,
} = styles;

export const SkeletonCard = () => (
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

export const PeopleSkeletonCard = () => (
    <div className={peopleSkeletonCardContainer}>
        <span className={peopleSkeletonCardImage} />
        <div className={peopleSkeletonCardTextContainer}>
            <span className={peopleSkeletonCardTitle} />
            <p className={peopleSkeletonCardText} />
            <p className={peopleSkeletonCardText} />
            <p className={peopleSkeletonCardFinalText} />
            <span className={peopleSkeletonCardButton} />
        </div>
    </div>
);

SkeletonCard.propTypes = {

};
