import React from 'react';
import Container from './components/container/Container'
import './components/assets/styles/Style.css';
import {LoginProvider} from './context/LoginContext';

function App() {
  return (
    <LoginProvider>
    <div className='container'>
       <Container />
    </div>
    </LoginProvider>
  );
}

export default App;
