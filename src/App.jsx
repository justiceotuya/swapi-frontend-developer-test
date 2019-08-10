import React from 'react';
import Layout from './containers/layout';
import SkeletonCard from './components/skeletonCard';
import Card from './components/Card';

const App = () => (
    <div>
        <Layout pageTopic="Popular Starships">
            {/* <SkeletonCard /> */}
            <Card />
        </Layout>
    </div>
);

export default App;
