import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../view/Header/Header';
import Main from '../view/Main';
import Login from '../view/Registration/Login';
import Signup from '../view/Registration/Signup';
import { useLoginStatus } from '../../context/LoginContext';
import '../assets/styles/Style.css';
import '../assets/styles/mobile.css';

const Container = () => {


  const {loggedIn, setLoggedIn} = useLoginStatus();


  return (

    <Router>
      <div className='Presentation'>
        <Header />
        <Routes>
        <Route exact path="/" element={<Main loggedin={loggedIn} />} />
        <Route exact path="/home" element={<Main loggedin={loggedIn} />} />
        <Route exact path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        </Routes>
      </div>
    </Router> 

  );
};

export default Container;
