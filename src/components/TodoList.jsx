import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onToggleComplete, onDelete, onDeleteAllCompleted, isCompletedPath }) => (
  <div className="todo-list">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggleComplete={onToggleComplete}
        onDelete={isCompletedPath ? onDelete : null} // Only show delete button in "Completed" path
      />
    ))}
    {isCompletedPath && (
      <button className='deleteAll' onClick={onDeleteAllCompleted}>Delete All Completed</button> // Delete all button only on "Completed" path
    )}
  </div>
);

export default TodoList;