import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Home = ({loggedIn,handleLogout}) => {
  document.title="Indian Voting Platform | Home"

  // const signin=localStorage.getItem("signin")
  // let users

  // if(signin)
  //   users=JSON.parse(localStorage.getItem("user"))

  const styles = {
    header: {
      padding: '10px 16px',
      background: '#555',
      color: '#f1f1f1'
    },
    button: {
      border: 'none',
      color: 'white',
      padding: '16px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      transitionDuration: '0.4s',
      cursor: 'pointer'
    },
    button1: {
      backgroundColor: 'gray',
      color: 'black',
      border: '2px solid #04AA6D'
    },
    button1Hover: {
      backgroundColor: '#04AA6D',
      color: 'green'
    },
    button2: {
      backgroundColor: 'green',
      color: 'black',
      border: '2px solid #008CBA'
    },
    button2Hover: {
      backgroundColor: '#008CBA',
      color: 'white'
    },
    divHover: {
      backgroundColor: 'blue',
      color: 'white'
    },
    myDiv: {
      border: '5px outset red',
      backgroundColor: 'lightblue',
      textAlign: 'center'
    },
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      display: 'flex',
      flexWrap: 'wrap'
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: '0 30px'
    },
    th: {
      backgroundColor: 'green',
      color: 'white',
      border: '5px solid black'
    },
    td: {
      width: '150px',
      textAlign: 'center',
      border: '5px solid black',
      padding: '5px'
    },
    h2: {
      color: 'black'
    },
    headerSection: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#CBC3E3',
      color: '#008000',
      width: '100%'
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f1f1f1',
      padding: '10px',
      width: '200px'
    },
    navLink: {
      margin: '10px 0',
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold'
    },
    main: {
      flex: 1,
      maxWidth: '800px',
      margin: '20px'
    },
    section: {
      marginBottom: '50px'
    },
    footer: {
      display: 'block',
      padding: '3px',
      color: 'white',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      backgroundColor: '#90EE90',
      textAlign: 'center'
    }
  };

  return (
    <div>
    <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
    <img src="./images/ashok pillar.png" alt="" style={{
          height: "200px",
          opacity: 0.3,
          zIndex: 2,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto"
        }} />
        <div style={styles.body}>
      <header style={styles.headerSection}>
        <div style={styles.header}>
          <h1>Welcome to Electoral Commission</h1>
          <p>Ensuring fair and transparent elections</p>
        </div>
      </header>

      <nav style={styles.nav}>
        <table style={styles.table}>
          <tbody>
            <tr><td><a style={styles.navLink} href="#form">Forms</a></td></tr>
            <tr><td><a style={styles.navLink} href="#events">Recent Voting Events</a></td></tr>
            <tr><td><a style={styles.navLink} href="#services">Services</a></td></tr>
            <tr><td><a style={styles.navLink} href="#faq">FAQ</a></td></tr>
          </tbody>
        </table>
      </nav>

      <main style={styles.main}>
        <section id="form" style={styles.section}>
          <h2 style={styles.h2}>New registration for general electors</h2>
          <p>Fill Form 6 if you are 18 years or above or you will turn 18 in a few months</p>
          <Link to="/registrationform" style={{ ...styles.button, ...styles.button1 }}>Fill Form</Link>
      <Link to="/guidelines" style={{ ...styles.button, ...styles.button2 }}>Guidelines</Link>

          <h2 style={styles.h2}>New registration for overseas(NRI) electors</h2>
          <p>Fill Form 6A if you are a citizen of India and have not acquired citizenship of any other country.</p>
          <button style={{...styles.button, ...styles.button1}}>Fill Form</button>
          <button style={{...styles.button, ...styles.button2}}>Guidelines</button>

          <h2 style={styles.h2}>Objection for proposed inclusion/deletion of name in existing roll</h2>
          <p>Fill Form 7 to get your name deleted from the existing electoral roll.</p>
          <button style={{...styles.button, ...styles.button1}}>Fill Form</button>
          <button style={{...styles.button, ...styles.button2}}>Guidelines</button>

          <h2 style={styles.h2}>Shifting of residence/correction of entries in existing electoral roll/replacement of EPIC/marking of PwD</h2>
          <p>Fill Form 8 to get an EPIC with updated or replacement or marking of PwD.</p>
          <button style={{...styles.button, ...styles.button1}}>Fill Form</button>
          <button style={{...styles.button, ...styles.button2}}>Guidelines</button>
        </section>

        <section id="events" style={styles.section}>
          <h2 style={styles.h2}>Recent Voting Events</h2>
          <p>Stay updated on the latest voting events in your area. Check the schedule and participate in the democratic process.</p>
        </section>

        <section id="services" style={styles.section}>
          <h2 style={styles.h2}>Services</h2>
          <p>Discover the range of services offered by the Electoral Commission. From voter registration to election monitoring, we've got you covered.</p>
        </section>

        <section id="faq" style={styles.section}>
          <h2 style={styles.h2}>FAQ</h2>
          <div style={styles.myDiv}>
            <p>Find answers to frequently asked questions about the electoral process and our services. If you have additional questions, feel free to contact us.</p>
            <p>This includes a list of frequently asked questions and answers here. <Link to="/faqs">FAQs</Link> page.</p>
          </div>
        </section>

        {/* <footer style={styles.footer}>
          <p><a href="mailto:dec-it@eci.gov.in">Mail here for other queries</a></p>
        </footer> */}
      </main>
    </div>
    <Footer/>
    </div>
  )
}

export default Home