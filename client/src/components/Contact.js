import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  document.title = "Indian Voting Platform | Contacts";

  useEffect(() => {
    document.body.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/04/65/81/24/360_F_465812436_VpBouK7LBB2VGFkaVwXWlaAeYOtbq9OA.jpg)";
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.backgroundImage = "";
    }
  }, []);

  const containerStyle = {
    textAlign: 'center',
    color: 'white',
    marginTop: '0', // Added marginTop to ensure no shifting
  };

  const headingStyle = {
    marginBottom: '20px',
    fontSize: '2em',
    color: '#fff',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    margin: '10px 0',
    fontSize: '1.2em',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  const iconStyle = {
    marginRight: '8px',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <div className="contact-info">
        <h1 style={headingStyle}>Contact Us</h1>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <a href="https://www.instagram.com/ecisveep/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <i className="fab fa-instagram" style={iconStyle}></i> Instagram
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="https://www.facebook.com/ECI/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <i className="fab fa-facebook" style={iconStyle}></i> Facebook
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <i className="fas fa-globe" style={iconStyle}></i> Website
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="mailto:ecipk@eci.gov.in" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <i className="fas fa-envelope" style={iconStyle}></i> Email
            </a>
          </li>
          <li style={listItemStyle}>
            <i className="fas fa-phone" style={iconStyle}></i> Toll-free: 1800-111-950
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
