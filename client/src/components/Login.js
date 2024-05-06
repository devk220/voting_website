import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Login = ({handleLogin,onClickHandler,show,hide,togg,visible}) => {

  document.title="Indian Voting Platform | Login"

  const navigate=useNavigate()

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  axios.defaults.withCredentials=true

  const eHandler=(e)=>{
    setEmail(e.target.value)
  }
  const pHandler=(e)=>{
    setPass(e.target.value)
  }
  const sHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://voting-website-api.vercel.app/signin", {
        email, pass
      });
  
      if (response.data.message === "success") {
        alert("Login successful");

        localStorage.setItem("signin",true)
        localStorage.setItem("user",JSON.stringify(response.data.user))
  
        handleLogin(response.data.user);
        navigate('/');
      } else if(response.data.message === "email error") {
        alert("Invalid email");
      }
      else{
        alert("Invalid password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className='container'>
    <h1 style={{textAlign:"center"}} >Login with your Details</h1>
      <form onSubmit={sHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={eHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type={togg} className="form-control" id="exampleInputPassword1" onChange={pHandler}/>
          <p onClick={onClickHandler}>{visible ? show : hide}</p>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <h4>Don't have an account?</h4><Link to='/signup'><h4>Signup</h4></Link>
      </form>
    </div>
  )
}

export default Login