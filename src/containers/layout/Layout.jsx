import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import styles from './Layout.module.css';

const { layoutContent } = styles;

const Layout = ({
    children, handleSearch, isSearchPresent, isItemPage,
}) => (
    <>
            <Header
                handleSearch={handleSearch}
                isSearchPresent={isSearchPresent}
                isItemPage={isItemPage}
            />
            <div className={layoutContent}>
                {children}
            </div>
        </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
