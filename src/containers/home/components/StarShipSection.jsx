/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getHomePageSection, getCards, getImages } from '../../../utils';
import styles from '../Home.module.css';
import SkeletonCard from '../../../components/skeletonCard';
import { SpaceShipCard } from '../../../components/Card';
import { SPACESHIPS, STRINGS } from '../constants';

const { POPULAR_SPACESHIPS, VIEW_MORE } = STRINGS;
const { starShipSection, homePageTopic, viewMoreButton } = styles;

const StarShipSection = ({ data, loading }) => {
    const { results } = data;
    return (
        <section>
            <h2 className={homePageTopic}>{POPULAR_SPACESHIPS}</h2>
            <div className={starShipSection}>
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : getHomePageSection(results, 6).map((spaceshipData, index) => {
                            const {
                                cargo_capacity,
                                length,
                                manufacturer,
                                model,
                                starship_class,
                                name,
                            } = spaceshipData;
                            return (
                                <SpaceShipCard
                                    key={name}
                                    image={getImages(SPACESHIPS, index)}
                                    cargo_capacity={cargo_capacity}
                                    length={length}
                                    manufacturer={manufacturer}
                                    model={model}
                                    starship_class={starship_class}
                                    name={name}
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
};

StarShipSection.propTypes = {
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

StarShipSection.defaultProps = {
    data: {},
};

export default StarShipSection;
