import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="tabs">
    <NavLink to="/" exact activeClassName="active">All</NavLink>
    <NavLink to="/active" activeClassName="active">Active</NavLink>
    <NavLink to="/completed" activeClassName="active">Completed</NavLink>
  </nav>
);

export default Navigation;