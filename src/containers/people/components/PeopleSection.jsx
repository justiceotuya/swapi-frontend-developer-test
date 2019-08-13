/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { STRINGS } from '../../home/constants';
import { CharacterCard } from '../../../components/Card';
import {
    getHomePageSection, getCards, getImages, CHARACTER
} from '../../../utils';
import styles from '../People.module.css';
import { SkeletonCard } from '../../../components/skeletonCard';

const { POPULAR_CHARACTERS, VIEW_MORE } = STRINGS;
const { PageTopic, viewMoreButton, charactersSection } = styles;

const PeopleSection = ({ loading, data: { results } }) => (
    <section>
        <h2 className={PageTopic}>{POPULAR_CHARACTERS}</h2>
        <div className={charactersSection}>
            {/* <SkeletonCard /> */}
            {
                loading ? getCards().length > 0 && getCards().map(num => (
                    <SkeletonCard key={num} />
                ))

                    : (window.location.href.endsWith('/people') ? results : getHomePageSection(results, 4)).map(characterData => {
                        const { name, gender, birth_year } = characterData;
                        return (
                            <CharacterCard
                                key={characterData.name}
                                image={getImages(CHARACTER, results)}
                                name={name}
                                gender={gender}
                                birthYear={birth_year}
                            />
                        );
                    })
            }

        </div>
        <a href="/people" className={viewMoreButton}>
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
