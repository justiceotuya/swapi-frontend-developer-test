import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import styles from './Layout.module.css';

const { layoutContent } = styles;

const Layout = ({
    children, handleSearch, handleSearchGroup,
}) => (
    <>
            <Header
                handleSearch={handleSearch}
                handleSearchGroup={handleSearchGroup}
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
