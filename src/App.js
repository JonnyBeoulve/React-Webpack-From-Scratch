import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Houston from './containers/Houston';
import asyncComponent from './hoc/asyncComponent';

const AsyncAstronaut = asyncComponent(() => {
    return import('./containers/Astronaut.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Houston</Link> | <Link to="/astronaut">Astronaut</Link>
                </div>
                <div>
                    <Route path="/" exact component={Houston} />
                    <Route path="/astronaut" component={AsyncAstronaut} />
                </div>
            </div>
        );
    }
}

export default App;