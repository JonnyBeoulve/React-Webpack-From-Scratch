import React from 'react';

import classes from './AstronautImage.css';
import AstronautImage from '../../assets/astronaut.jpg';

/*==============================================================
// This simple functional component displays an image of an
// astronaut.
==============================================================*/
const astronautImage = (props) => (
    <div className={classes.AstronautImage}>
        <img src={AstronautImage} className={classes.AstronautImg} />
    </div>
);

export default astronautImage;