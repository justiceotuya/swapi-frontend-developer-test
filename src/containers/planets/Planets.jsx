/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Layout from '../layout';
import { getData } from '../../utils';
import PlanetsSection from './components';
import { useStateValue } from '../../store';

const Planets = () => {
    const [{ loading, data }, dispatch] = useStateValue();

    const makeServerCall = url => {
        getData(url).then(({ data }) => {
            dispatch({
                payload: data,
                type: 'getPlanetsData',
            });
        });
    };

    const handlePreviousButtonClick = () => {
        const { planets: { previous } } = data;
        const url = previous.split('/api/')[1];
        return previous !== null && makeServerCall(url);
    };

    const handleNextButtonClick = () => {
        const { planets: { next } } = data;
        const url = next.split('/api/')[1];
        return next !== null && makeServerCall(url);
    };

    useEffect(() => {
        makeServerCall('planets');
    }, []);

    const handleSearch = e => {
        const searchUrl = `planets/?search=${e}`;
        const getSearchData = makeServerCall(searchUrl);
        AwesomeDebouncePromise(getSearchData, 500);
    };

    const { planets } = data;
    return (
        <Layout handleSearch={handleSearch}>
            <PlanetsSection
                data={planets}
                loading={loading}
                handlePreviousButtonClick={handlePreviousButtonClick}
                handleNextButtonClick={handleNextButtonClick}
            />
        </Layout>
    );
};

export default Planets;
