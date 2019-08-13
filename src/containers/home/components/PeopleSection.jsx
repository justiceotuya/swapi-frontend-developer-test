/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { CHARACTER, STRINGS } from '../constants';
import { CharacterCard } from '../../../components/Card';
import { getHomePageSection, getCards, getImages } from '../../../utils';
import styles from '../Home.module.css';
import SkeletonCard from '../../../components/skeletonCard';

const { POPULAR_CHARACTERS, VIEW_MORE } = STRINGS;
const { homePageTopic, viewMoreButton, charactersSection } = styles;

const PeopleSection = ({ loading, data: { results } }) => (
    <section>
        <h2 className={homePageTopic}>{POPULAR_CHARACTERS}</h2>
        <div className={charactersSection}>
            {/* <SkeletonCard /> */}
            {
                loading ? getCards().length > 0 && getCards().map(num => (
                    <SkeletonCard key={num} />
                ))

                    : getHomePageSection(results, 4).map((characterData, index) => {
                        const { name, gender, birth_year } = characterData;
                        return (
                            <CharacterCard
                                key={characterData.name}
                                image={getImages(CHARACTER, index)}
                                name={name}
                                gender={gender}
                                birthYear={birth_year}
                            />
                        );
                    })
            }

        </div>
        <a href="#" className={viewMoreButton}>
            {VIEW_MORE}
        </a>
    </section>
);

PeopleSection.propTypes = {
    data: PropTypes.shape({
        birth_year: PropTypes.string,
        gender: PropTypes.string,
        name: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
};

PeopleSection.defaultProps = {
    data: {},
};
export default PeopleSection;
