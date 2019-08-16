import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StateProvider, initialState, reducer } from './store';
import { Home } from './containers/home';
import { People } from './containers/people';
import { SpaceShips } from './containers/spaceships';
import { Planets } from './containers/planets';
import ItemPage from './containers/item';

const App = () => (
    <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/people" component={People} />
                <Route exact path="/spaceships" component={SpaceShips} />
                <Route exact path="/planets" component={Planets} />
                <Route path="/:item" component={ItemPage} />
                {/* <Route component={NoMatch} /> */}
            </Switch>
        </Router>
    </StateProvider>
);

export default App;
