import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './Layout.module.css';
import { STRINGS } from './constants';

const {
    DIRECTORY,
    SUBTITLE,
    PLACEHOLDER,
} = STRINGS;

const {
    headerMain,
    headerContainer,
    headerLogo,
    headerHeaderContainer,
    headerHeaderImage,
    headerHeaderTitle,
    headerHeaderSubTitle,
    headerHeaderSearchContainer,
    headerHeaderSearchBox,
    headerItemSelector,
} = styles;

const Header = ({ handleSearch, isSearchPresent = true }) => (
    <header className={headerMain}>
        {/* logo */}
        <a href="/">
            <img src={logo} alt="starwars-logo" className={headerLogo} />
        </a>

        {/* header  */}
        <section className={headerContainer}>
            <div className={headerHeaderContainer}>
                <img src={logo} alt="starwars-logo" className={headerHeaderImage} />
                <h1 className={headerHeaderTitle}>{DIRECTORY}</h1>
            </div>

            {/* subheader */}
            <p className={headerHeaderSubTitle}>{SUBTITLE}</p>

            {/* search bar */}
            {
                isSearchPresent
                && (
                    <div className={headerHeaderSearchContainer}>
                        <input
                            type="text"
                            id="search"
                            className={headerHeaderSearchBox}
                            placeholder={PLACEHOLDER}
                            onChange={(e, searchGroup) => handleSearch(e.target.value, searchGroup)}
                        />
                    </div>
                )

            }
        </section>
    </header>
);
Header.propTypes = {

};

export default Header;
