import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import styles from './ItemPage.module.css';
import { STRINGS } from './constants';
import Layout from '../layout';

const {

} = STRINGS;

const {
    imageDataImage,
    imageCropper,
} = styles;

const ItemPage = ({ location }) => {
    console.log(location.data);
    console.log(location.image);
    return (
        <Layout isItemPage>
            <p>Baba</p>
            <div className={imageCropper}>
                <img src={location.image} alt="test" className={imageDataImage} />
            </div>
        </Layout>
    );
};
ItemPage.propTypes = {

};

export default ItemPage;
