import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({loggedIn,handleLogout}) => {

  const signin=localStorage.getItem("signin")

  const hoverStyle = {
    color: "white",

    textDecoration:"underline",
    transition: "color 1s ease-in"
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/020/933/072/small_2x/abstract-blur-gradient-background-vector.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <Link className="navbar-brand" to="/"><img className='mx-2' src="https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV" alt='' height="40px" style={{border:"2px solid brown",borderRadius:"20px"}}/><span style={{color:"moccasin"}}>Indian Voter's Portal</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container" style={{width:"55vw"}}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ width:"40em", display: "flex", justifyContent: "space-between"}}>
                <li className="nav-item">
                  <Link to="/" style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif",...(window.location.pathname === '/' && hoverStyle)}}>HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile"style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif",...(window.location.pathname === '/profile' && hoverStyle)}} >PROFILE</Link>
                </li>
                <li className="nav-item">
                  <Link to="/verify" style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif",...(window.location.pathname === '/mainpage' && hoverStyle)}}>VOTE HERE</Link>
                </li>
                <li className="nav-item">
                  <Link to="/result" style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif",...(window.location.pathname === '/result' && hoverStyle)}}>RESULTS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about"style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif",...(window.location.pathname === '/about' && hoverStyle)}} >ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif",...(window.location.pathname === '/contact' && hoverStyle)}} >CONTACT</Link>
                </li>
              </ul>
            </div>

            {loggedIn || signin ? 
              <button className="btn btn-warning" style={{textDecoration:"none",color:"red",fontWeight:"bold"}} onClick={handleLogout}>Logout</button> :
              <div>
                <button className="btn btn-warning mx-2"><Link style={{textDecoration:"none",color:"red",fontWeight:"bold"}} to="/login">Login</Link></button>
                <button className="btn btn-warning"><Link style={{textDecoration:"none",color:"red",fontWeight:"bold"}} to="/signup">Signup</Link></button>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
