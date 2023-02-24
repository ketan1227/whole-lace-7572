import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthData } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch user data
      const { data: users } = await axios.get("http://localhost:3000/users");
  
      // Check if user exists with given email and password
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        setAuthData(user);
        alert("Login successful!");
        <Navigate to="/" />
      } else {
        alert("User not found with given email and password.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundImage: "url('https://example.com/my-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "500px",
      padding: "40px",
    },
    formContainer: {
      width: "500px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px #ccc",
      padding: "40px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      padding: "10px",
      marginBottom: "20px",
      border: "none",
      borderBottom: "2px solid #ccc",
      width: "100%",
    },
    button: {
      backgroundColor: "#ff3f6c",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "20px",
    },
    footer: {
      marginTop: "20px",
      textAlign: "center",
      fontSize: "14px",
    },
    link: {
      color: "#ff3f6c",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1>My Login Page</h1>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Login</h2>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label style={styles.label} htmlFor="password">Password:</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button style={styles.button} type="submit">Login</button>
          <div style={styles.footer}>
            <p>
              New to Myntra?{" "}
              <a style={styles.link} href="/signup">Create an account</a>
            </p>
            <p>
              Forgot your password?{" "}
              <a style={styles.link} href="#">Reset now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
