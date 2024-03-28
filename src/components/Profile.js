import React from 'react';
import Signup from './Signup'

const Profile = ({ user, loggedIn }) => {
  document.title = "Indian Voting Platform | Profile"
  
  const signin=localStorage.getItem("signin")
  let users

  if(signin)
    users=JSON.parse(localStorage.getItem("user"))

  return (
    loggedIn ? (
      <div className='container' style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'blue' }}>My Profile</h1>
        <img src={`data:image/jpg;base64,${users.image}`} alt="Profile Image" style={{ height:'250px', border:'2px solid black', borderRadius:'80px' }} />
        <p style={{ fontSize: '18px', marginTop: '20px' }}><strong>Name:</strong> {users.firstname} {users.lastname}</p>
        <p style={{ fontSize: '18px' }}><strong>Email:</strong> {users.email}</p>
      </div>
    ) : (
      <Signup />
    )
  );
}

export default Profile;
