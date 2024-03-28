import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({loggedIn,handleLogout}) => {

  const signin=localStorage.getItem("signin")

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/"><img className='mx-2' src="https://play-lh.googleusercontent.com/3APi4HdWb0_rhnhAEoyJEYfSemXW9cNbA2VdOCSN7L6wgdjC_oTxLphER647R9PnSCkV" alt='' height="40px" style={{border:"2px solid red",borderRadius:"20px"}}/>Indian Voter's Portal</Link>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container" style={{width:"55vw"}}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ width:"40em", display: "flex", justifyContent: "space-between"}}>
                <li className="nav-item">
                  <Link to="/" style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif"}}>HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile"style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif"}} >PROFILE</Link>
                </li>
                <li className="nav-item">
                  <Link to="/verify" style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif"}}>VOTE HERE</Link>
                </li>
                <li className="nav-item">
                  <Link to="/result" style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif"}}>RESULTS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about"style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif"}} >ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"style={{textDecoration:"none",fontWeight:"bolder",color:"yellow",fontFamily:"sans-serif"}} >CONTACT</Link>
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
