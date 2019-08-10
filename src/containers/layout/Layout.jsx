import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import styles from './Layout.module.css';

const { layoutPageTopic } = styles;

const Layout = ({ pageTopic, children }) => (
    <>
        <Header />
        <h2 className={layoutPageTopic}>{pageTopic}</h2>
        {children}
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageTopic: PropTypes.string.isRequired,
};

export default Layout;
