import React from 'react';
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
} = styles;
const Header = () => (
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
                />
            </div>
        </section>
    </header>
);

Header.propTypes = {

};

export default Header;
