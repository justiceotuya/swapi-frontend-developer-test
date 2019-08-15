/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useStateValue } from '../../store';

import Layout from '../layout';
import { getData } from '../../utils';
import { PeopleSection } from '../people';
import PlanetSection from '../planets/components/PlanetSection';
import { SpaceShipSection } from '../spaceships';

// make asyncronous call to get all data
const getStarShipData = getData('starships');
const getPlanetsData = getData('planets');
const getPeoplesData = getData('people');

const Home = () => {
    const [{ loading, data }, dispatch] = useStateValue();
    const [searchGroup, setSearchGroup] = useState('');

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
        <Layout isSearchPresent={false}>
            {/* spaceships */}
            <SpaceShipSection
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
