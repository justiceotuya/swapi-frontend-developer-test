import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StateProvider, initialState, reducer } from './store';
import { Home } from './containers/home';

const App = () => (
    <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/checkout" component={Checkout} />
                <Route component={NoMatch} /> */}
            </Switch>
        </Router>
    </StateProvider>
);

export default App;
