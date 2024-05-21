import React, { useEffect } from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';

const About = () => {
  document.title = "Indian Voting Platform | About";

  useEffect(() => {
    document.body.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/04/65/81/24/360_F_465812436_VpBouK7LBB2VGFkaVwXWlaAeYOtbq9OA.jpg)";
    document.body.style.backgroundSize = "cover";
  
    return () => {
      document.body.style.backgroundImage = "";
    }
  }, []);

  const images = [
    { img: "./images/my new image 2.png" },
    { img: "./images/Komal.jpg" },
    { img: "./images/Sarnab.jpg" },
    { img: "./images/Debrishi.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.aboutContainer}>
        <p style={styles.aboutText}>
          Our final year project is an innovative online voting platform that aims to revolutionize the voting process. The uniqueness of our project lies in its approach to facilitate seamless and secure online voting, a concept that is not available anywhere else. Our vision is to eliminate the long waiting hours typically associated with traditional voting methods by enabling people to cast their votes online.
        </p>
      </div>
      <h1 style={styles.heading}>Our Creators</h1>
      <div className="container" style={styles.imageContainer}>
        {images.map((item, index) => (
          <img key={index} src={item.img} style={styles.image} alt="Creator" />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const styles = {
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  aboutContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
  },
  aboutText: {
    textAlign: "center",
    width: "60vw",
    fontSize: "1.2rem",
    lineHeight: "1.6",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  image: {
    height: "150px",
    width: "120px",
    border: "2px solid black",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    margin: "10px",
  },
  hoverImage: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
};

export default About;
