import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const UserList = (props) => {
  const { users, classes } = props;
  return (
    <ul className={classes.userList}>
      {users.map((user) => (
        <li key={user._id}>{user.email}</li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array
};

UserList.defaultProps = {
  users: []
};

export default withStyles(styles)(UserList);
