/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useStateValue } from '../../store';
import { getData } from '../../utils';
import Layout from '../layout';
import PeopleSection from './components';

const People = () => {
    const [{ loading, data }, dispatch] = useStateValue();
    const makeServerCall = url => {
        getData(url).then(({ data }) => {
            dispatch({
                payload: data,
                type: 'getPeoplesData',
            });
        });
    };

    useEffect(() => {
        makeServerCall('people');
    }, []);

    const handleSearch = e => {
        const searchUrl = `people/?search=${e}`;
        const getSearchData = makeServerCall(searchUrl);
        AwesomeDebouncePromise(getSearchData, 500);
    };

    const { people } = data;
    return (
        <Layout
            handleSearch={handleSearch}
        >
            <PeopleSection data={people} loading={loading} />
        </Layout>
    );
};

People.propTypes = {

};

export default People;