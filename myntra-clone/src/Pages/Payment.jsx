import React from 'react';

const PaymentPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src="https://i.imgur.com/gMxGZQ8.png"
          alt="Mynta logo"
          style={styles.logo}
        />
        <h2 style={styles.heading}>Secure Checkout</h2>
      </div>
      <div style={styles.formContainer}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Cardholder Name</label>
          <input type="text" style={styles.input} placeholder="John Doe" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Card Number</label>
          <input type="text" style={styles.input} placeholder="1234 5678 9101 1121" />
        </div>
        <div style={styles.rowContainer}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Expiration Date</label>
            <input type="text" style={styles.inputSmall} placeholder="MM/YY" />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>CVV</label>
            <input type="text" style={styles.inputSmall} placeholder="123" />
          </div>
        </div>
        <button style={styles.button}>Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentPage;

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 30,
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
    },
    logo: {
      width: 100,
      height: 50,
      marginRight: 10,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
      width: '70%',
      maxWidth: 500,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    input: {
      width: '100%',
      padding: 10,
      fontSize: 16,
      border: '1px solid #ccc',
      borderRadius: 5,
      backgroundColor: '#f9f9f9',
      color: '#333',
      outline: 'none',
    },
    inputSmall: {
      width: '80px',
      padding: 10,
      fontSize: 16,
      border: '1px solid #ccc',
      borderRadius: 5,
      backgroundColor: '#f9f9f9',
      color: '#333',
      outline: 'none',
    },
    rowContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    button: {
      padding: '10px 20px',
      fontSize: 16,
      backgroundColor: '#f39200',
      color: '#fff',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
    },
    buttonHover: {
      backgroundColor: '#e98100',
    },
  };
  