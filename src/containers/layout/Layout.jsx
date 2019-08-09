import React from 'react';

import logo from '../../assets/logo.png';
import styles from './Layout.module.css';
import { STRINGS } from './constants';

const {
    DIRECTORY,
    SUBTITLE,
    PLACEHOLDER,
} = STRINGS;

const {
    layoutMain,
    layoutContainer,
    layoutLogo,
    layoutHeaderContainer,
    layoutHeaderImage,
    layoutHeaderTitle,
    layoutHeaderSubtitle,
    layoutHeaderSearchContainer,
    layoutHeaderSearchBox,
} = styles;

const Layout = () => (
    <header className={layoutMain}>
        {/* logo */}
        <img src={logo} alt="starwars-logo" className={layoutLogo} />
        {/* header  */}
        <section className={layoutContainer}>
            <div className={layoutHeaderContainer}>
                <img src={logo} alt="starwars-logo" className={layoutHeaderImage} />
                <h1 className={layoutHeaderTitle}>{DIRECTORY}</h1>
            </div>

            {/* subheader */}
            <p className={layoutHeaderSubtitle}>{SUBTITLE}</p>

            {/* search bar */}
            <div className={layoutHeaderSearchContainer}>
                <input
                    type="text"
                    id="search"
                    className={layoutHeaderSearchBox}
                    placeholder={PLACEHOLDER}
                />
            </div>
        </section>
    </header>
);

export default Layout;
