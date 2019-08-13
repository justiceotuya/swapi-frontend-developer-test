import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const Header = ({ handleSearch, handleSearchGroup }) => (
    <header className={headerMain}>
        {/* logo */}
        <img src={logo} alt="starwars-logo" className={headerLogo} />
        {/* header  */}
        <section className={headerContainer}>
            <div className={headerHeaderContainer}>
                <img src={logo} alt="starwars-logo" className={headerHeaderImage} />
                <h1 className={headerHeaderTitle}>{DIRECTORY}</h1>
            </div>

            {/* subheader */}
            <p className={headerHeaderSubTitle}>{SUBTITLE}</p>

            {/* search bar */}
            <div className={headerHeaderSearchContainer}>
                <input
                    type="text"
                    id="search"
                    className={headerHeaderSearchBox}
                    placeholder={PLACEHOLDER}
                    onChange={(e, searchGroup) => handleSearch(e.target.value, searchGroup)}
                />
            </div>

            <div className={headerItemSelector}>

                <input type="radio" name="group" id="planet" value="planets" onClick={e => handleSearchGroup(e.target.value)} />
                <input type="radio" name="group" id="planet" value="starships" onClick={e => handleSearchGroup(e.target.value)} />
                <input type="radio" name="group" id="planet" value="people" onClick={e => handleSearchGroup(e.target.value)} />
            </div>
        </section>
    </header>
);
Header.propTypes = {

};

export default Header;
