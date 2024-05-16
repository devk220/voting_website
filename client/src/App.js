import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Verify from './components/Verify';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ErrorFace from './components/ErrorFace';
import CorrectFace from './components/CorrectFace';
import Contact from './components/Contact';
import About from './components/About';
import Result from './components/Result';
import ThankYou from './components/ThankYou';

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("signin") === "true")
  const [user, setUser] = useState(null)
  const [togg, setTogg] = useState('password')
  const [visible, setVisible] = useState(false)

  const handleLogout=()=>{
    localStorage.removeItem("signin")
    localStorage.removeItem("user")
    setLoggedIn(false)
    setUser(null)
  }

  const handleLogin=(userdata)=>{
    setLoggedIn(true)
    setUser(userdata)
  }

  const show=<FaEye/>

  const hide=<FaEyeSlash/>

  const onClickHandler=()=>{

    setVisible(!visible)
    
    setTogg(visible ? 'password' : 'text');
  }

  const chartData={
    labels:["N.Modi(BJP)","M.Banerjee(TMC)","R.Gandhi(Cong)","A.Kejriwal(AAP)"],

    datasets:[
      {
        label:"Votes",
        data:[50,30,80,60]
      }
    ]
}

  return (
    <div style={{position:"relative",height:"100vh"}}>
      <Router>
        <Routes>
          <Route path='/' element={<Home loggedIn={loggedIn} handleLogout={handleLogout} />}/>
          <Route path='/verify' element={<Verify loggedIn={loggedIn}/>}/>
          <Route path='/login' element={<Login handleLogin={handleLogin} onClickHandler={onClickHandler} show={show} hide={hide} togg={togg} visible={visible}/>}/>
          <Route path='/signup' element={<Signup loggedIn={loggedIn} onClickHandler={onClickHandler} show={show} hide={hide} togg={togg} visible={visible} />}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/profile' element={<Profile user={user} loggedIn={loggedIn}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/result' element={<Result chartData={chartData}/>}/>
          <Route path='/errorface' element={<ErrorFace/>}/>
          <Route path='/correctface' element={<CorrectFace/>}/>
          <Route path='/thankyou' element={<ThankYou/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
