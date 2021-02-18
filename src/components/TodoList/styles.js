const styles = theme => ({
  todoList: {
    listStyleType: 'none'
  },
  todoItem: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

export default styles;
