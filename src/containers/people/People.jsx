/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useStateValue } from '../../store';
import { getData, handlePagination, handlePaginationControl } from '../../utils';
import Layout from '../layout';
import PeopleSection from './components';
import { GENDERS } from './constant';
import styles from './People.module.css';

const People = () => {
    const [{ loading, data }, dispatch] = useStateValue();
    const [selectedValue, setselectedValue] = useState('All');

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
        filterData();
    }, []);

    const handleSearch = e => {
        const searchUrl = `people/?search=${e}`;
        const getSearchData = makeServerCall(searchUrl);
        AwesomeDebouncePromise(getSearchData, 500);
    };

    const handleFilterGender = e => {
        setselectedValue(e.target.value);
    };

    const newDataCopy = { ...data };
    const { people } = newDataCopy;
    const newPeople = { ...people };
    let filteredData = [];
    const filter = results => {
        filteredData = data.people.results.filter(result => result.gender.toLowerCase() === selectedValue.toLowerCase());
        newPeople.results = filteredData;
        return newPeople;
    };

    const filterData = () => {
        const { results } = people;
        if (selectedValue === 'Male') {
            filter(results);
        } else if (selectedValue === 'Female') {
            filter(results);
        } else if (selectedValue === 'Robot') {
            filteredData = data.people.results.filter(result => result.gender.toLowerCase() === 'n/a');
            newPeople.results = filteredData;
            return newPeople;
        } else { return newPeople; }

        return newPeople;
    };

    useEffect(() => {
        filterData();
    }, [selectedValue]);

    return (
        <Layout handleSearch={handleSearch}>

            <PeopleSection
                data={filterData()}
                loading={loading}
                handlePreviousButtonClick={handlePreviousButtonClick}
                handleNextButtonClick={handleNextButtonClick}
                selectedValue={selectedValue}
                handleFilterGender={handleFilterGender}
            />
        </Layout>
    );
};

People.propTypes = {

};

export default People;
