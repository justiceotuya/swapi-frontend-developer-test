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

    const handleKeyPress = e => {
        console.log(e);
    };
    // handlePreviousButtonClick = e => {
    //     console.log(e);
    // };
    // handleNextButtonClick = e => {
    //     console.log(dataSize);
    // };

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
                    onKeyPress={handleKeyPress}
                >
                    &lt;

                </button>
                <button
                    type="button"
                    className={paginationGreaterThan}
                    onClick={data => handleNextButtonClick(data)}
                    tabIndex={-1}
                    onKeyPress={handleKeyPress}
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
