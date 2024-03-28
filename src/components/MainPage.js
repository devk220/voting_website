import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainPage = () => {

  document.title="Indian Voting Website | Vote Here"

  let party = [
    {
      image: "./images/Modi.webp",
      Name: "Narendra Modi",
      Party: "BJP",
      Logo: "./images/BJP.jpg",
    },
    {
      image: "./images/Mamata Banerjee.jpg",
      Name: "Mamata Banerjee",
      Party: "Trinamool",
      Logo: "./images/Tmc.png",
    },
    {
      image: "./images/Rahul_Gandhi.jpg",
      Name: "Rahul Gandhi",
      Party: "Congress",
      Logo: "/images/congress.png",
    },
    {
      image: "./images/Arvind Kejriwal.jpg",
      Name: "Arvind Kejriwal",
      Party: "Aam Aadmi Party",
      Logo: "./images/Aap.webp",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="container" style={{display:"flex",flexDirection:"row"}}>
      {party.map((item) => (
        <div className="card mt-5" style={{ width: "18rem",height:"25rem" }} key={item.Name}>
          <img src={item.image} className="card-img-top" alt="..." style={{height:"200px"}} />
          <div className="card-body">
            <h5 className="card-title">{item.Name}</h5>
            <p className="card-text">
              {item.Party}
              <img src={item.Logo} alt={item.Party} style={{height:"100px"}}/>
            </p>
            <button className="btn btn-primary">
              Vote
            </button> 
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default MainPage;
