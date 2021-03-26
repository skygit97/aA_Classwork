const allTodos = ({ todo }) => (
  // Object.keys(todo).map(id => todo[id])
  Object.values(todo)
);

export default allTodos;
