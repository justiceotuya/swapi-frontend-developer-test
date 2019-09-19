/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    STRINGS, getPaginationDetails
} from './constant';
import style from './Buttton.module.css';

const { VIEW_MORE, LESS_THAN, GREATER_THAN } = STRINGS;

const {
    viewMoreButton,
    pagination,
    paginationText,
    paginationButton,
    paginationGreaterThan,
    paginationLessThan,
} = style;

export const ViewMoreButton = ({ href }) => (
    <Link to={href} className={viewMoreButton}>
        {VIEW_MORE}
    </Link>
);

export const PaginationButtons = ({
    handlePreviousButtonClick,
    handleNextButtonClick,
    paginationData,
    dataSize,
}) => {
    const {
        firstItemCount,
        lastItemCount,
    } = paginationData;

    return (
        <div className={pagination}>
            <p className={paginationText}>
                {
                    getPaginationDetails(firstItemCount,
                        lastItemCount,
                        dataSize)
                }
            </p>
            <div className={paginationButton}>
                <button
                    type="button"
                    className={paginationLessThan}
                    onClick={data => handlePreviousButtonClick(data)}
                    tabIndex={-1}
                >
                    {LESS_THAN}
                </button>
                <button
                    type="button"
                    className={paginationGreaterThan}
                    onClick={data => handleNextButtonClick(data)}
                    tabIndex={-1}
                >
                    {GREATER_THAN}
                </button>
            </div>
        </div>
    );
};

ViewMoreButton.propTypes = {
    href: PropTypes.string.isRequired,
};

PaginationButtons.propTypes = {
    dataSize: PropTypes.string.isRequired,
    handleNextButtonClick: PropTypes.string.isRequired,
    handlePreviousButtonClick: PropTypes.string.isRequired,

    paginationData: PropTypes.shape({
        firstItemCount: PropTypes.string.isRequired,
        lastItemCount: PropTypes.string.isRequired,
    }).isRequired,
};
