import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorFace = () => {

  const navigate=useNavigate()

  useEffect(() => {
    const redirectTimer=setTimeout(() => {
      navigate('/')
    }, 5000);
  
    return () => clearTimeout(redirectTimer)
  }, [navigate])

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <h1>Face does not Match</h1>
    <img src="https://media.tenor.com/sVSHzakEOpQAAAAi/nah-no-deal.gif" alt="" srcset="" />
    <h3>Redirecting to Home Page...</h3>
    </div>
  )
}

export default ErrorFace