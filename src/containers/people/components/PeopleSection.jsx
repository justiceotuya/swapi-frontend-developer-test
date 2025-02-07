/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { STRINGS, GENDERS } from '../constant';
import { CharacterCard } from '../../../components/Card';
import {
    getHomePageSection, getCards, getImages, CHARACTER
} from '../../../utils';
import styles from '../People.module.css';
import { SkeletonCard } from '../../../components/skeletonCard';
import { PaginationButtons, ViewMoreButton } from '../../../components/Buttons';

const { POPULAR_CHARACTERS } = STRINGS;
const {
    PageTopic,
    charactersSection,
    filterContainer,
    filterHeading,
    filterSelect,
} = styles;

const PeopleSection = ({
    loading,
    data,
    handlePreviousButtonClick,
    handleNextButtonClick,
    selectedValue,
    handleFilterGender,
}) => {
    const {
        results, count, pagination,
    } = data;

    const handleOpenItemDetail = datas => {
        console.log(datas);
    };

    return (
        <section>
            <h2 className={PageTopic}>{POPULAR_CHARACTERS}</h2>
            {
                window.location.href.includes('people') && (
                    <div className={filterContainer}>
                        <p className={filterHeading}>Filter</p>
                        <select className={filterSelect} value={selectedValue} onChange={handleFilterGender}>
                            {
                                GENDERS.map(gender => {
                                    const { id, value } = gender;
                                    return (
                                        <option key={id} value={value}>{value}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                )
            }
            <div className={charactersSection}>
                {/* <SkeletonCard /> */}
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : (window.location.href.endsWith('/people') ? results : getHomePageSection(results, 4)).map(characterData => {
                            const { name } = characterData;
                            return (
                                <CharacterCard
                                    key={name}
                                    data={characterData}
                                    image={getImages(CHARACTER, results)}
                                    handleOpenItemDetail={() => handleOpenItemDetail(characterData)}
                                />
                            );
                        })
                }

            </div>

            {
                window.location.href.endsWith('/people') ? (
                    pagination !== undefined && (
                        <PaginationButtons
                            paginationData={pagination}
                            dataSize={count}
                            handlePreviousButtonClick={handlePreviousButtonClick}
                            handleNextButtonClick={handleNextButtonClick}
                        />
                    )
                )
                    : (
                        <ViewMoreButton href="/people" />
                    )
            }
        </section>
    );
};

PeopleSection.propTypes = {
    data: PropTypes.shape({
        count: PropTypes.string,
        pagination: PropTypes.string,
        results: PropTypes.string,
    }),
    handleFilterGender: PropTypes.func.isRequired,
    handleNextButtonClick: PropTypes.func.isRequired,
    handlePreviousButtonClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

PeopleSection.defaultProps = {
    data: {},
};
export default PeopleSection;
