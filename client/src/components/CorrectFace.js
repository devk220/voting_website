import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CorrectFace = () => {
  
  const navigate=useNavigate()

  useEffect(() => {
    const redirectTimer=setTimeout(() => {
      navigate('/mainpage')
    }, 3500);
  
    return () => clearTimeout(redirectTimer)
  }, [navigate])
  

  return (
    <div style={{display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"}}>
    <h1>Face Matched</h1>
    <img src="https://media.tenor.com/bm8Q6yAlsPsAAAAi/verified.gif" alt="" srcset="" />
    <h3>Redirecting to Voting Page...</h3>
    </div>
  )
}

export default CorrectFace