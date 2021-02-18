import React, { useEffect, useState } from 'react';
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

const MagicBox = (props) => {
  const { classes } = props;
  const [color, setColor] = useState(() => 'green');

  useEffect(() => {
    const intervalID = setInterval(() => {
      const newColor = randomColor(color);
      setColor(newColor);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [color]);

  return <div className={classes.magicBox} style={{ backgroundColor: color }} />;
};

MagicBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MagicBox);
