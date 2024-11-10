import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddTodo from './components/addTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: idCounter, text, active: true }]);
    setIdCounter(idCounter + 1);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleDeleteAllCompleted = () => {
    setTodos(todos.filter(todo => todo.active));
  };

  const filterTodos = (status) => {
    if (status === 'Active') return todos.filter(todo => todo.active);
    if (status === 'Completed') return todos.filter(todo => !todo.active);
    return todos; // For "All"
  };

  return (
    <Router>
      <div className="mainPage">
        <h1>#todo</h1>
        <Navigation />
        <hr />

        <AddTodo onAddTodo={handleAddTodo} />

        <Routes>
          <Route
            path="/"
            element={<TodoList todos={filterTodos('All')} onToggleComplete={handleToggleComplete} />}
          />
          <Route
            path="/active"
            element={<TodoList todos={filterTodos('Active')} onToggleComplete={handleToggleComplete} />}
          />
          <Route
            path="/completed"
            element={<TodoList todos={filterTodos('Completed')} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTodo} onDeleteAllCompleted={handleDeleteAllCompleted} isCompletedPath />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;