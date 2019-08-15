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
import { PaginationButtons, ViewMoreButton } from '../../../components/Buttons';

const { POPULAR_CHARACTERS } = STRINGS;
const { PageTopic, charactersSection } = styles;

const PeopleSection = ({
    loading,
    data,
    handleOpenItemDetail,
    handlePreviousButtonClick,
    handleNextButtonClick,
}) => {
    const {
        results, count, next, previous, pagination,
    } = data;

    return (
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
                                    key={name}
                                    image={getImages(CHARACTER, results)}
                                    name={name}
                                    gender={gender}
                                    birthYear={birth_year}
                                    handleOpenItemDetail={handleOpenItemDetail}
                                />
                            );
                        })
                }

            </div>

            {
                window.location.href.endsWith('/people') ? (
                    pagination !== undefined && (
                        <PaginationButtons
                            paginationData={pagination}
                            dataSize={count}
                            handlePreviousButtonClick={handlePreviousButtonClick}
                            handleNextButtonClick={handleNextButtonClick}
                        />
                    )
                )
                    : (
                        <ViewMoreButton href="/people" />
                    )
            }
        </section>
    );
};

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
