/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';
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

const { POPULAR_PLANETS, VIEW_MORE } = STRINGS;
const {
    planetCardsSection,
    PageTopic,
    viewMoreButton,
} = styles;

const PlanetSection = ({ data, loading }) => {
    const { results } = data;
    console.log(data);
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
                !window.location.href.endsWith('/planets') && (
                    <a href="/planets" className={viewMoreButton}>
                        {VIEW_MORE}
                    </a>
                )
            }
        </section>

    );
};
PlanetSection.propTypes = {

};

PlanetSection.propTypes = {
    data: PropTypes.shape({
        cargo_capacity: PropTypes.string,
        length: PropTypes.string,
        manufacturer: PropTypes.string,
        model: PropTypes.string,
        name: PropTypes.string,
        starship_class: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
};

PlanetSection.defaultProps = {
    data: {},
};

export default PlanetSection;
