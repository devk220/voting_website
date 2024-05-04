import React, { useEffect } from 'react';
import Signup from './Signup'
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ user, loggedIn }) => {
  document.title = "Indian Voting Platform | Profile"
  
  const signin=localStorage.getItem("signin")
  let users

  if(signin)
    users=JSON.parse(localStorage.getItem("user"))

  useEffect(() => {

    document.body.style.backgroundImage="url(https://static.vecteezy.com/system/resources/thumbnails/023/006/017/small/soft-blue-zig-zag-sun-burst-background-vector.jpg)"
    document.body.style.backgroundSize="cover"
  
    return () => {
      document.body.style.backgroundImage=""
    }
  }, [])

  return (
    loggedIn ? (
      <>
      <Navbar/>
      <div className='container' style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'blue' }}>My Profile</h1>
        <img src={`data:image/jpg;base64,${users?.image}`} alt="Profile" style={{ height:'250px', border:'2px solid black', borderRadius:'80px' }} />

        <p style={{ fontWeight:"bolder",fontSize: '22px', marginTop: '20px' }}><strong style={{ fontSize: '28px'}} >Name:</strong> {users.firstname} {users.lastname}</p>
        <p style={{ fontWeight:"bolder",fontSize: '22px', marginTop: '20px' }}><strong style={{ fontSize: '28px' }}>Email:</strong> {users.email}</p>
      </div>
      <Footer/>
      </>
    ) : (
      <Signup />
    )
  );
}

export default Profile;
