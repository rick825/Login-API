import React from 'react';
import { useNavigate } from 'react-router-dom';


const Main = ({loggedin}) => {
  const navigate = useNavigate(); 

  const dashboard = () => {  
    console.log('dashboard');
    navigate('/dashboard'); 
  };


  const handleGetStarted = () => {
    if (loggedin) {
      dashboard(); 
    } else {
      navigate('/signup'); 
    }
  };


  return (
    <>
      <div className='main'>
        <div className="mainleft cont">
          <div className="mainleftdiv">
            <hr />
            <ul className='mainleftlist'>
              <li><img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/></li>
              <li><img src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/></li>
              <li><img  src="https://img.icons8.com/ios-filled/50/close-window.png" alt="close-window"/></li>
            </ul>
          </div>
          <div className="mainrightdiv">
            <h2>Chatting Made Simple, Connecting Globally!!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.</p>
            <button onClick={handleGetStarted}>Get Started →</button>
          </div>
        </div>
        <div className="mainright cont">
          <div className="mainrightcont">
            <div className="maincube1 maincube"></div>
            <div className="maincube2 maincube"></div>
            <div className="main-box1 main-box"></div>
            <div className="main-box2 main-box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
