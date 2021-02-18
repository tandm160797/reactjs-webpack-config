import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const TodoList = (props) => {
  const { todos, onTodoClick, classes } = props;
  const handleTodoClick = (evt, todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };

  return (
    <ul className={classes.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} onClick={(evt) => handleTodoClick(evt, todo)} className={classes.todoItem}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

export default withStyles(styles)(TodoList);
