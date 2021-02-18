import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Button, SvgIcon } from '@material-ui/core';
import styles from './styles';
import MagicBox from '$components/MagicBox';

const App = (props) => {
  const { classes } = props;

  return (
    <div className={classes.app}>
      <MagicBox />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
