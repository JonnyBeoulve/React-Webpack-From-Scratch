import React, { Component } from 'react';

import AstronautImage from '../components/AstronautImage/AstronautImage';

/*==============================================================
// A basic page containing an image for the Astronaut route.
==============================================================*/
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