/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { PlanetCard } from '../../../components/Card';
import { SkeletonCard } from '../../../components/skeletonCard';
import { STRINGS } from '../constant';
import {
    getHomePageSection,
    getCards,
    getImages,
    PLANET
} from '../../../utils';

import styles from '../Planets.module.css';
import { ViewMoreButton, PaginationButtons } from '../../../components/Buttons';

const { POPULAR_PLANETS } = STRINGS;
const {
    planetCardsSection,
    PageTopic,
} = styles;

const PlanetSection = ({
    data,
    loading,
    handlePreviousButtonClick,
    handleNextButtonClick,
}) => {
    const {
        results, count, next, previous, pagination,
    } = data;

    return (
        <section>
            <h2 className={PageTopic}>{POPULAR_PLANETS}</h2>
            <div className={planetCardsSection}>
                {/* <SkeletonCard /> */}
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : (window.location.href.endsWith('/planets') ? results
                            : getHomePageSection(results, 3)).map(planetData => {
                            const {
                                name,
                                climate,
                                diameter,
                                terrain,
                                population,
                                rotation_period,
                                orbital_period,
                                surface_water,
                                gravity,
                            } = planetData;

                            return (
                                <PlanetCard
                                    key={name}
                                    image={getImages(PLANET, results)}
                                    name={name}
                                    climate={climate}
                                    diameter={diameter}
                                    terrain={terrain}
                                    population={population}
                                    name={name}
                                    rotation_period={rotation_period}
                                    orbital_period={orbital_period}
                                    surface_water={surface_water}
                                    gravity={gravity}
                                />
                            );
                        })

                }
            </div>
            {
                window.location.href.endsWith('/planets') ? (
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
                        <ViewMoreButton href="/planets" />
                    )
            }
        </section>

    );
};
PlanetSection.propTypes = {

};

PlanetSection.propTypes = {
    data: PropTypes.shape({
        count: PropTypes.string,
        name: PropTypes.string,
        next: PropTypes.string,
        pagination: PropTypes.shape({
            firstItemCount: PropTypes.string,
            lastItemCount: PropTypes.string,
        }).isRequired,
        previous: PropTypes.string,
        results: PropTypes.array,
        starship_class: PropTypes.string,
    }),
    handleNextButtonClick: PropTypes.bool.isRequired,
    handlePreviousButtonClick: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};

PlanetSection.defaultProps = {
    data: {},
};

export default PlanetSection;
