import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../store';

import logo from '../../assets/logo.png';
import styles from './ItemPage.module.css';
import { STRINGS, fakeData } from './constants';
import Layout from '../layout';
import { PeopleSection } from '../people';
import { CharacterCard, SpaceShipCard } from '../../components/Card';
import {
    getImages, CHARACTER, handleRecentlyViewedItems, SPACESHIPS
} from '../../utils';

const {
    LOREM,
} = STRINGS;

const {
    imageDataImage,
    imageCropper,
    itemName,
    itemNameBracket,
    itemParagraph,
    itemSection,
    recentItemSection,
} = styles;

const ItemPage = ({ location }) => {
    const [{ loading, data }, dispatch] = useStateValue();

    const recentItems = handleRecentlyViewedItems(location);
    const ItemData = JSON.parse(localStorage.getItem('item'));
    const imageData = JSON.parse(localStorage.getItem('item')).image;

    return (
        <Layout isItemPage>

            {
                ItemData !== null
                    ? (
                        <>
                            <div className={imageCropper}>
                                <img src={ItemData.image} alt="test" className={imageDataImage} />
                            </div>
                            <p className={itemName}>
                                <span className={itemNameBracket}>[</span>
                                {ItemData.data.name}
                                <span className={itemNameBracket}>]</span>
                            </p>

                            <section className={itemSection}>
                                {
                                    fakeData.map(item => {
                                        const { id } = item;
                                        return (
                                            <p key={id} className={itemParagraph}>
                                                {LOREM}
                                            </p>
                                        );
                                    })
                                }
                            </section>
                            <h3>Recent Items</h3>
                            <section className={recentItemSection}>
                                {
                                    recentItems !== undefined && recentItems.map(characterData => {
                                        const { name } = characterData;

                                        return window.location.href.includes('person')
                                            ? (
                                                <CharacterCard
                                                    key={name}
                                                    data={characterData}
                                                    image={getImages(CHARACTER, recentItems)}
                                                />
                                            ) : (
                                                <SpaceShipCard
                                                    data={data}
                                                    image={getImages(SPACESHIPS, recentItems)}
                                                />
                                            );
                                    })
                                }
                            </section>
                        </>
                    ) : <p>Go back home and select a data</p>
            }
        </Layout>
    );
};
ItemPage.propTypes = {

};

export default ItemPage;
