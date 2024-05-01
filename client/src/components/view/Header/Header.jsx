import React from 'react'
import './Header.css';
import '../../assets/styles/Style.css';
import { useLoginStatus } from '../../../context/LoginContext';


const Header = () => {

  const { loggedIn } = useLoginStatus();

  return <>
    <div className="nav">
    <div className="navleft">
      <div className="navlogo">
        <a href="/">
          <h2>Chat App</h2>
        </a>
      </div>
    </div>
    <div className="navright">
      <div className="navlist">
     {loggedIn &&
        <ul>
          <li className="navitem">
            <a href="/home" className="navlink"
              ><img
                src="https://img.icons8.com/sf-regular/48/home-page.png" alt="home-page"/>
            </a>
          </li>
          <li className="navitem">
            <a href="/profile" className="navlink"
              ><img
                src="https://img.icons8.com/windows/32/000000/user-male-circle.png"
                alt="user-male-circle"
            /></a>
          </li>
          <li className="navitem">
            <a href="/setting" className="navlink"
              ><img
                src="https://img.icons8.com/fluency-systems-regular/48/settings--v1.png"
                alt="settings--v1"
            /></a>
          </li>
        </ul>
       }
       {!loggedIn &&
        <ul className='notlogin'>
            <li className="navitem">
            <a href="/signup" className="navlink signup"
              > Signup
            </a>
          </li>
          <li className="navitem">
            <a href="/login" className="navlink login"
              >Login</a>
          </li>
        </ul>
       }

      </div>
    </div>
  </div>
  </>
  
}

export default Header;