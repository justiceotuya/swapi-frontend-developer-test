import React from 'react';

import { useStateValue } from '../../store';
import styles from './ItemPage.module.css';
import { STRINGS, fakeData } from './constants';
import Layout from '../layout';
import { CharacterCard, SpaceShipCard } from '../../components/Card';
import {
    getImages, CHARACTER, handleRecentlyViewedItems, SPACESHIPS
} from '../../utils';

const {
    LOREM,
    RECENT_ITEMS,
    GO_BACK,
    LEFT_SQUARE_BRACKET,
    RIGHT_SQUARE_BRACKET,
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
    const [{ data }] = useStateValue();

    const recentItems = handleRecentlyViewedItems(location);
    const ItemData = JSON.parse(localStorage.getItem('item'));

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
                                <span className={itemNameBracket}>{LEFT_SQUARE_BRACKET}</span>
                                {ItemData.data.name}
                                <span className={itemNameBracket}>{RIGHT_SQUARE_BRACKET}</span>
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
                            <h3>{RECENT_ITEMS}</h3>
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
                    ) : <p>{GO_BACK}</p>
            }
        </Layout>
    );
};
ItemPage.propTypes = {
    location: PropTypes.shapeOf({
        data: PropTypes.object,
        image: PropTypes.string,
    }),
};

export default ItemPage;
