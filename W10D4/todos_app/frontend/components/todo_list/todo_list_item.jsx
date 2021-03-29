import React from 'react';

export const TodoListItem = ({todo}) => {
  return (
    <li key={todo.id}>{todo.title}</li>
  )
} 