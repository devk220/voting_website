import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Home = ({loggedIn,handleLogout}) => {
  document.title="Indian Voting Platform | Home"
  return (
    <div>
    <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
        <div className="container">
          <h1>Welcome to Our Website</h1>
        </div>
    <Footer/>
    </div>
  )
}

export default Home