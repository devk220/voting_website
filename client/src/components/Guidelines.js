import React from 'react'

const Guidelines = () => {

    const styles = {
        body: {
          fontFamily: 'Arial, sans-serif',
          margin: 0,
          padding: 0
        },
        header: {
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '20px',
          textAlign: 'center'
        },
        main: {
          padding: '20px'
        },
        h1: {
          color: '#007bff'
        },
        p: {
          lineHeight: 1.6
        },
        ol: {
          listStyleType: 'decimal',
          marginLeft: '20px'
        },
        li: {
          marginBottom: '10px'
        },
        footer: {
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          textAlign: 'center',
          position: 'fixed',
          bottom: 0,
          width: '100%'
        }
      };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.h1}>New Registration Guidelines for General Electors</h1>
      </header>

      <main style={styles.main}>
        <h2 style={styles.h1}>GUIDELINES</h2>
        <p style={styles.p}>If you are a new voter and want to register for the upcoming elections, please follow these guidelines:</p>

        <ol style={styles.ol}>
          <li style={styles.li}>Visit the official website of the Election Commission or your state's election board.</li>
          <li style={styles.li}>Look for the "New Voter Registration" or "Register to Vote" section.</li>
          <li style={styles.li}>Fill out the online registration form with accurate information.</li>
          <li style={styles.li}>Provide proof of identity, age, and address as required.</li>
          <li style={styles.li}>Upload scanned copies of the necessary documents.</li>
          <li style={styles.li}>Review the information you've provided and submit the form.</li>
          <li style={styles.li}>After submission, you will receive a confirmation message with your registration details.</li>
        </ol>

        <p style={styles.p}>For any assistance or queries regarding the registration process, contact your local election office.</p>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Election Commission of Your Country. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Guidelines