/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useStateValue } from '../../store';
import { getData, handlePagination, handlePaginationControl } from '../../utils';
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

    const handlePreviousButtonClick = () => {
        handlePaginationControl(data, 'people', 'previous', makeServerCall);
    };

    const handleNextButtonClick = () => {
        handlePaginationControl(data, 'people', 'next', makeServerCall);
    };

    useEffect(() => {
        makeServerCall('people');
    }, []);

    const handleSearch = e => {
        const searchUrl = `people/?search=${e}`;
        const getSearchData = makeServerCall(searchUrl);
        AwesomeDebouncePromise(getSearchData, 500);
    };

    const handleOpenItemDetail = (e, results) => {
        console.log('alive', results);
    };

    const { people } = data;
    return (
        <Layout handleSearch={handleSearch}>
            <PeopleSection
                data={people}
                loading={loading}
                handleOpenItemDetail={e => handleOpenItemDetail(e, 'test')}
                handlePreviousButtonClick={handlePreviousButtonClick}
                handleNextButtonClick={handleNextButtonClick}
            />
        </Layout>
    );
};

People.propTypes = {

};

export default People;
