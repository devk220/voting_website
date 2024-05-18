import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Login = ({ handleLogin, onClickHandler, show, hide, togg, visible }) => {
  document.title = "Indian Voting Platform | Login";

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const eHandler = (e) => {
    setEmail(e.target.value);
  };
  const pHandler = (e) => {
    setPass(e.target.value);
  };
  const sHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://voting-website-node-backend.vercel.app/signin", {
        email, pass
      });

      if (response.data.message === "success") {
        alert("Login successful");

        localStorage.setItem("signin", true);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        handleLogin(response.data.user);
        navigate('/');
      } else if (response.data.message === "email error") {
        alert("Invalid email");
      }
      else {
        alert("Invalid password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#e5ccff'; // Light blue background color outside the container
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    
    return () => {
      document.body.style.backgroundColor = ''; // Reset styles when component unmounts
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.height = '';
      document.body.style.display = '';
      document.body.style.justifyContent = '';
      document.body.style.alignItems = '';
    };
  }, []);

  return (
    <div className='container2'>
      <h1 style={{ textAlign: "center" }}>Login with your Details</h1>
      <form onSubmit={sHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label2">Email address</label>
          <input type="email" className="form-control2" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={eHandler} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label2">Password</label>
          <input type={togg} className="form-control2" id="exampleInputPassword1" onChange={pHandler} />
          <p onClick={onClickHandler}>{visible ? show : hide}</p>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <h4>Don't have an account?</h4><Link to='/signup'><h4>Signup</h4></Link>
      </form>
    </div>
  );
};

export default Login;
