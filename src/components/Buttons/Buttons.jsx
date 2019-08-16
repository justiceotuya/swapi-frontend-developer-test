/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { VIEW_MORE, getPaginationDetails } from './constant';
import style from './Buttton.module.css';

const {
    viewMoreButton,
    pagination,
    paginationText,
    paginationButton,
    paginationGreaterThan,
    paginationLessThan,
    disabled,
} = style;

export const ViewMoreButton = ({ href }) => (
    <a href={href} className={viewMoreButton}>
        {VIEW_MORE}
    </a>
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
                    &lt;

                </button>
                <button
                    type="button"
                    className={paginationGreaterThan}
                    onClick={data => handleNextButtonClick(data)}
                    tabIndex={-1}
                >
                    &gt;
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
