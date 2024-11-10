import React from 'react';
import './TodoItem.css'

const TodoItem = ({ todo, onToggleComplete, onDelete }) => (
  <div className={`todo-item ${!todo.active ? 'completed' : ''}`}>
    <input
      type="checkbox"
      checked={!todo.active}
      onChange={() => onToggleComplete(todo.id)}
    />
    <span>{todo.text}</span>
    {onDelete && (
      <button onClick={() => onDelete(todo.id)}>Delete</button> // Show delete button only if onDelete is provided
    )}
  </div>
);

export default TodoItem;