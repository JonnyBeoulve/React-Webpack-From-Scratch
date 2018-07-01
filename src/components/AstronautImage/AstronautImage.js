import React from 'react';

import classes from './AstronautImage.css';
import AstronautImage from '../../assets/astronaut.jpg';

const astronautImage = (props) => (
    <div className={classes.AstronautImage}>
        <img src={AstronautImage} className={classes.AstronautImg} />
    </div>
);

export default astronautImage;