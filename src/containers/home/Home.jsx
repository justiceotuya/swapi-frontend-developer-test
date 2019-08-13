/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useStateValue } from '../../store';

import Layout from '../layout';
import { getData } from '../../utils';
import { PeopleSection, StarShipSection } from './components';
import PlanetSection from './PlanetSection';

// make asyncronous call to get all data
const getStarShipData = getData('starships');
const getPlanetsData = getData('planets');
const getPeoplesData = getData('people');

const Home = () => {
    const [{ loading, data }, dispatch] = useStateValue();

    useEffect(() => {
        axios.all([getStarShipData, getPlanetsData, getPeoplesData])
            .then(axios.spread((
                StarShipResult,
                PlanetsResult,
                PeoplesResult
            ) => {
                // Both requests are now complete and you can setSate here.
                dispatch({
                    type: 'getInitialData',
                    payload:
                    {
                        people: PeoplesResult.data,
                        planets: PlanetsResult.data,
                        spaceships: StarShipResult.data,
                    },
                });
            }));
    }, []);

    const { spaceships, planets, people } = data;
    return (
        <Layout>
            {/* spaceships */}
            <StarShipSection
                data={spaceships}
                loading={loading}
            />
            {/* planets */}
            <PlanetSection
                data={planets}
                loading={loading}
            />
            {/* people */}
            <PeopleSection
                data={people}
                loading={loading}
            />
        </Layout>
    );
};

Home.propTypes = {

};

export default Home;
