import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'


const Signup = ({onClickHandler,show,hide,togg,visible}) => {

  document.title="Indian Voting Platform | Signup"

  const navigate=useNavigate()

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [epic, setEpic] = useState("")
  const [file, setFile] = useState(null)

  const fHandler=(e)=>{
    setFname(e.target.value)
  }
  const lHandler=(e)=>{
    setLname(e.target.value)
  }
  const eHandler=(e)=>{
    setEmail(e.target.value)
  }
  const pHandler=(e)=>{
    setPass(e.target.value)
  }
  const epHandler=(e)=>{
    setEpic(e.target.value)
  }

  

  const sHandler = async (e) => {
    e.preventDefault();

    const formData=new FormData();

    if (fname.length < 3) {
      alert("First Name length should be greater than or equal to 3");
      return;
    }
  
    if (lname.length < 3) {
      alert("Last Name length should be greater than or equal to 3");
      return;
    }
  
    if (pass.length < 8) {
      alert("Password length should be greater than or equal to 8");
      return;
    }

    formData.append('fname',fname)
    formData.append('lname',lname)
    formData.append('email',email)
    formData.append('epic',epic)
    formData.append('pass',pass)
    formData.append('file',file)

    try {
        const response = await axios.post("http://localhost:4000/register", formData,{
          headers:{"Content-Type":"multipart/form-data"}
        });
        
        if (response.data.message === 'success') {
            alert("Registered successfully, Kindly Login using these credentials");
        } else {
            alert("User already present with this email, Kindly Login");
        }
        navigate('/login');
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
    <h1 style={{textAlign:"center"}}>Signup with your Details</h1>
      <form onSubmit={sHandler}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label2">First Name</label>
          <input type="text"className="form-control2" id="firstname" onChange={fHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label2">Last Name</label>
          <input type="text" className="form-control2" id="lastname" onChange={lHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label2">Email address</label>
          <input type="email" className="form-control2" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={eHandler}/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label2">EPIC No.</label>
          <input type="text" className="form-control2" onChange={epHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label2">Upload your Image</label>
          <input className="form-control2" type="file" id="formFile" onChange={(e)=>{setFile(e.target.files[0])}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label2">Password</label>
          <input type={togg} className="form-control2" id="exampleInputPassword1" onChange={pHandler}/>
          <p onClick={onClickHandler}>{visible ? show : hide}</p>
        </div>
        <button type="submit" className="btn btn-primary">Signup</button> 
        <h4>Already have an Account?</h4><Link to='/login'><h4>Login</h4></Link>
      </form>
    </div>
  )
}

export default Signup