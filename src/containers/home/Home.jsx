/* eslint-disable camelcase */
import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SpaceShipCard from '../../components/Card';
import Layout from '../layout';
import styles from './Home.module.css';
import SkeletonCard from '../../components/skeletonCard';
import { useStateValue } from '../../StateContext';
import { SPACESHIPS, PLANET, CHARACTER } from './constants';

const {
    starShipSection,
    homePageTopic,
} = styles;

const getCards = () => {
    let number = [];
    for (let i = 0; i < 3; i++) {
        number = [...number, i];
    }
    return number;
};

const getImages = item => {
    let max;
    if (item === SPACESHIPS) {
        max = 6;
    } else if (item === PLANET) {
        max = 3;
    } else if (item === CHARACTER) {
        max = 4;
    }
    const ImageNumber = Math.ceil(Math.random() * max);
    let dataUrl;
    item.map(data => {
        if (data.id === ImageNumber) { dataUrl = data.imageURL; }
        return dataUrl;
    });
    return dataUrl;
};

const Home = () => {
    const [{ loading, data }, dispatch] = useStateValue();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://swapi.co/api/starships');
                dispatch({
                    type: 'fetch data',
                    payload: response.data,
                });
            } catch (error) {
                dispatch({
                    type: 'error',
                    payload: error,
                });
            }
        };
        fetchData();
    }, []);

    // generate items for the front page
    const getHomePageSection = (data, num) => {
        // create a new array and insert the first result from the api using the number passed as limit
        let newCard = [];
        for (let i = 1; i <= num; i++) {
            newCard = [...newCard, data[i]];
        }
        console.log(newCard);
        return newCard;
    };

    const { results } = data;

    return (
        <Layout pageTopic="Popular Starships">
            <h2 className={homePageTopic}>Popular Spaceships</h2>
            <section className={starShipSection}>
                {/* <SkeletonCard /> */}
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : getHomePageSection(results, 6).map(data => {
                            const {
                                cargo_capacity,
                                length,
                                manufacturer,
                                model,
                                starship_class,
                                name,
                            } = data;
                            return (
                                <SpaceShipCard
                                    key={data.name}
                                    image={getImages(SPACESHIPS)}
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

            </section>

            {/* planets */}
            <h2 className={homePageTopic}>Popular Planets</h2>
            <section className={starShipSection}>
                {/* <SkeletonCard /> */}
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : getHomePageSection(results, 6).map(data => (
                            <SpaceShipCard
                                key={data.name}
                                image={getImages(SPACESHIPS)}
                                title={data.name}
                                details={'f01fac..365f9b9 master -> master Branch \'master\' set up to track remote branch \'master\' from \'origin\'.'}
                            />
                        ))

                }

            </section>

            {/* people */}
            <h2 className={homePageTopic}>Popular Characters</h2>
            <section className={starShipSection}>
                {/* <SkeletonCard /> */}
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : getHomePageSection(results, 6).map(data => (
                            <SpaceShipCard
                                key={data.name}
                                image={getImages(SPACESHIPS)}
                            // title={data.name}
                            />
                        ))

                }

            </section>

        </Layout>
    );
};
Home.propTypes = {

};

export default Home;
