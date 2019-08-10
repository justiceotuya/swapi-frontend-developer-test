import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from '../../components/Card';
import Layout from '../layout';
import styles from './Home.module.css';
import SkeletonCard from '../../components/skeletonCard';
import { useStateValue } from '../../StateContext';
import { SPACESHIPS, PLANET, CHARACTER } from './constants';

const {
    starShipSection,
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

    const { results } = data;
    console.log(getImages(SPACESHIPS));
    return (
        <Layout pageTopic="Popular Starships">
            <section className={starShipSection}>
                {/* <SkeletonCard /> */}
                {
                    loading ? getCards().length > 0 && getCards().map(num => {
                        console.log('dataADD', data);
                        return (
                            <SkeletonCard />
                        );
                    })

                        : results.map(item => (
                            <Card
                                key={item.name}
                                image={getImages(SPACESHIPS)}
                                title={item.name}
                                details={'f01fac..365f9b9 master -> master Branch \'master\' set up to track remote branch \'master\' from \'origin\'.'}
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
