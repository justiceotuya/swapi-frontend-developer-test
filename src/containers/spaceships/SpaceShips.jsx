/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Layout from '../layout';
import { getData } from '../../utils';
import SpaceShipSection from './components';
import { useStateValue } from '../../store';

const SpaceShips = () => {
    const [{ loading, data }, dispatch] = useStateValue();

    const makeServerCall = url => {
        getData(url).then(({ data }) => {
            dispatch({
                payload: data,
                type: 'getSpaceShipsData',
            });
        });
    };

    useEffect(() => {
        makeServerCall('starships');
    }, []);

    const handleSearch = e => {
        const searchUrl = `starships/?search=${e}`;
        const getSearchData = makeServerCall(searchUrl);
        AwesomeDebouncePromise(getSearchData, 500);
    };

    const { spaceships } = data;
    return (
        <Layout handleSearch={handleSearch}>
            <SpaceShipSection data={spaceships} loading={loading} />
        </Layout>
    );
};

export default SpaceShips;
