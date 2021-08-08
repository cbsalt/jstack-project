import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Routes from '../../Routes';

import { Nav } from './styles'

export default function Layout({ onToogleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header 
        onToogleTheme={onToogleTheme} 
        selectedTheme={selectedTheme}
      />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/15092018">Post</Link>
      </Nav>
      <Routes />
    </BrowserRouter>
  );
}
