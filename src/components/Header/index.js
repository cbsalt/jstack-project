import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ onToogleTheme, selectedTheme }) {
  const history = useHistory();

  function handleNavigate() {
    history.push('/')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        onClick={handleNavigate} 
        style={{ color: '#fff' }}
      >
        HOME
      </button>
      <button 
        type="button" 
        onClick={onToogleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}