import React, { Component } from 'react';

import AstronautImage from '../components/AstronautImage/AstronautImage';

class Astronaut extends Component {
    render () {
        return (
            <div>
                <h1>Astronaut</h1>
                <AstronautImage />
            </div>
        );
    }
}

export default Astronaut;