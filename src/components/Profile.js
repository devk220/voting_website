import React from 'react';
import Signup from './Signup'
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ user, loggedIn }) => {
  document.title = "Indian Voting Platform | Profile"
  
  const signin=localStorage.getItem("signin")
  let users

  if(signin)
    users=JSON.parse(localStorage.getItem("user"))

  return (
    loggedIn ? (
      <>
      <Navbar/>
      <div className='container' style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'blue' }}>My Profile</h1>
        <img src={`data:image/jpg;base64,${users?.image}`} alt="Profile" style={{ height:'250px', border:'2px solid black', borderRadius:'80px' }} />

        <p style={{ fontSize: '18px', marginTop: '20px' }}><strong>Name:</strong> {users.firstname} {users.lastname}</p>
        <p style={{ fontSize: '18px' }}><strong>Email:</strong> {users.email}</p>
      </div>
      <Footer/>
      </>
    ) : (
      <Signup />
    )
  );
}

export default Profile;
