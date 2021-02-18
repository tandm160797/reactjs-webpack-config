import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const randomColor = (color) => {
  const COLORS = ['orange', 'green', 'blue', 'deepink', 'yellow', 'pink', 'aqua', 'red'];
  const currentIndexColor = COLORS.indexOf(color);
  if (currentIndexColor !== -1) {
    let newIndexColor;
    do {
      newIndexColor = Math.trunc(Math.random() * COLORS.length);
    } while (newIndexColor === currentIndexColor);
    return COLORS[newIndexColor];
  }
  return color;
};

const ColorBox = (props) => {
  const { classes } = props;
  const [color, setColor] = useState(() => {
    let localStorageColor = localStorage.getItem('color');
    if (localStorageColor === 'null') {
      localStorageColor = 'orange';
    }
    return localStorageColor;
  });
  const handleColorBoxClick = (evt) => {
    const newColor = randomColor(color);
    setColor(newColor);
    localStorage.setItem('color', newColor);
  };

  return <div className={classes.colorBox} style={{ backgroundColor: color }} onClick={(evt) => handleColorBoxClick(evt)} />;
};

ColorBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ColorBox);
