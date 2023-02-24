import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Address() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  useEffect(() => {
    const address = getAddress();
    if (address) {
      setName(address.name);
      setMobile(address.mobile);
      setAddressLine1(address.addressLine1);
      setAddressLine2(address.addressLine2);
      setCity(address.city);
      setState(address.state);
      setPincode(address.pincode);
      
    }
    
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const address = {
      name,
      mobile,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
    };
    localStorage.setItem('address', JSON.stringify(address));
    setName("");
      setMobile("");
      setAddressLine1("");
      setAddressLine2("");
      setCity("");
      setState("");
      setPincode("");
  };

  function getAddress() {
    const storedAddress = localStorage.getItem('address');
    if (storedAddress) {
      return JSON.parse(storedAddress);
    }
    return null;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add Address</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            Mobile
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={styles.input}
              required
            />
          </label>
        </div>
        <label style={styles.label}>
          Address Line 1
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Address Line 2
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            State
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            Pincode
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={styles.input}
              required
            />
          </label>
        </div>
       <Link to="/payment"> <button type="submit" style={styles.button}>
          Save Address
        </button></Link>
      </form>
    </div>
  );
}
export default Address

const styles = {
    container: {
      backgroundColor: '#f2f2f2',
      padding: '24px 20px',
      fontFamily: 'sans-serif',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto',
      borderRadius: '8px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 0 16px',
    },
    formGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '16px 0',
    },
    label: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginRight: '16px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginBottom: '8px',
    },
    input: {
      border: 'none',
      backgroundColor: '#fff',
      padding: '8px',
      fontSize: '16px',
      borderRadius: '4px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      width: '100%',
      marginBottom: '16px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#f0c14b',
      color: '#111',
      padding: '12px 16px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease',
    },
  };
  
