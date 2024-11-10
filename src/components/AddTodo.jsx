import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add details"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddTodo;