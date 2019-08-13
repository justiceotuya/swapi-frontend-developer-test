import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';
import { PlanetCard } from '../../components/Card';
import SkeletonCard from '../../components/skeletonCard';

import { PLANET } from './constants';
import {
    getHomePageSection,
    getCards,
    getImages,
    getData
} from '../../utils';

import styles from './Home.module.css';
import { useStateValue } from '../../store/StateContext';

const {
    starShipSection,
    homePageTopic,
    viewMoreButton,
} = styles;

const PlanetSection = ({ data, loading }) => {
    const { results } = data;
    return (
        <section>
            <h2 className={homePageTopic}>Popular Planets</h2>
            {/* <div className={starShipSection}> */}
            {/* <SkeletonCard /> */}
            {
                loading ? getCards().length > 0 && getCards().map(num => (
                    <div className={starShipSection}>
                        <SkeletonCard key={num} />
                    </div>
                ))

                    : (

                        <ItemsCarousel
                            gutter={50}
                            activePosition="center"
                            chevronWidth={60}
                            numberOfCards={3}
                            slidesToScroll={2}
                            outsideChevron
                            showSlither={false}
                            firstAndLastGutter={false}
                            // activeItemIndex={this.state.activeItemIndex}
                            // requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                            rightChevron={'>'}
                            leftChevron={'<'}
                        >
                            {/* <div className={starShipSection}> */}
                            {
                                getHomePageSection(results, 3).map((planetData, index) => (
                                    <PlanetCard
                                        key={planetData.name}
                                        image={getImages(PLANET, index)}
                                        title={planetData.name}
                                        details={'f01fac..365f9b9 master -> master Branch \'master\' set up to track remote branch \'master\' from \'origin\'.'}
                                    />
                                ))
                            }
                            {/* </div> */}
                        </ItemsCarousel>
                    )

            }
            {/* </div> */}
            <a href="#" className={viewMoreButton}>
                VIEW MORE
            </a>
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
