import React from 'react';

const RegistrationForm = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#D3D3D3',
      margin: 0,
      padding: '20px'
    },
    form: {
      background: '#ADD8E6',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    h2: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxSizing: 'border-box',
      fontSize: '16px'
    },
    select: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxSizing: 'border-box',
      fontSize: '16px'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxSizing: 'border-box',
      fontSize: '16px',
      resize: 'vertical'
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={styles.body}>
      <form action="submit_registration.php" method="POST" style={styles.form}>
        <h2 style={styles.h2}>New Registration Form for General Electors</h2>
        <label htmlFor="fullname" style={styles.label}>Full Name:</label>
        <input type="text" id="fullname" name="fullname" required style={styles.input} />

        <label htmlFor="dob" style={styles.label}>Date of Birth:</label>
        <input type="date" id="dob" name="dob" required style={styles.input} />

        <label htmlFor="gender" style={styles.label}>Gender:</label>
        <select id="gender" name="gender" required style={styles.select}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="address" style={styles.label}>Address:</label>
        <textarea id="address" name="address" rows="4" required style={styles.textarea}></textarea>

        <label htmlFor="email" style={styles.label}>Email:</label>
        <input type="email" id="email" name="email" required style={styles.input} />

        <label htmlFor="phone" style={styles.label}>Phone Number:</label>
        <input type="tel" id="phone" name="phone" required style={styles.input} />

        <button type="submit" style={styles.button}>Submit Registration</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
