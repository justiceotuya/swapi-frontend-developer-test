/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import {
    getHomePageSection, getCards, getImages, SPACESHIPS
} from '../../../utils';
import styles from '../SpaceShips.module.css';
import { SkeletonCard } from '../../../components/skeletonCard';
import { SpaceShipCard } from '../../../components/Card';
import { STRINGS } from '../constant';
import { ViewMoreButton, PaginationButtons } from '../../../components/Buttons';

const { POPULAR_SPACESHIPS } = STRINGS;
const { starShipSection, PageTopic } = styles;

const SpaceShipSection = ({
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
            <h2 className={PageTopic}>{POPULAR_SPACESHIPS}</h2>
            <div className={starShipSection}>
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : (window.location.href.endsWith('/spaceships') ? results : getHomePageSection(results, 6)).map(spaceshipData => {
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
                                    image={getImages(SPACESHIPS, results)}
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
            {
                window.location.href.endsWith('/spaceships')
                    ? (
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
                        <ViewMoreButton href="/spaceships" />
                    )
            }
        </section>

    );
};

SpaceShipSection.propTypes = {
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

SpaceShipSection.defaultProps = {
    data: {},
};

export default SpaceShipSection;
