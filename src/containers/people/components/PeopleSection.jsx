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
        results, count, next, previous, pagination,
    } = data;

    const handleOpenItemDetail = datas => {
        console.log(datas);
    };

    return (
        <section>
            <h2 className={PageTopic}>{POPULAR_CHARACTERS}</h2>

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
                    {/* <option value="Option2">Option2</option>
                <option value="Option3">Option3</option> */}
                </select>
            </div>

            <div className={charactersSection}>
                {/* <SkeletonCard /> */}
                {
                    loading ? getCards().length > 0 && getCards().map(num => (
                        <SkeletonCard key={num} />
                    ))

                        : (window.location.href.endsWith('/people') ? results : getHomePageSection(results, 4)).map(characterData => {
                            const { name, gender, birth_year } = characterData;
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
        birth_year: PropTypes.string,
        gender: PropTypes.string,
        name: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
};

PeopleSection.defaultProps = {
    data: {},
};
export default PeopleSection;
