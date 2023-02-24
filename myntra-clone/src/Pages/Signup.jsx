import { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
        confirmPassword,
      });
      console.log(response.data);
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    } catch (error) {
      console.error(error);
     
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url('https://images.pexels.com/photos/6338701/pexels-photo-6338701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "40px",
    },
    formContainer: {
      width: "500px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px #ccc",
      padding: "40px",
      marginBottom: "50px",
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
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Create an account</h2>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
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
          <label style={styles.label} htmlFor="confirmPassword">Confirm Password:</label>
          <input
            style={styles.input}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <button style={styles.button} type="submit">Sign Up</button>
        </form>
        <div style={styles.footer}>
          Already have an account? <a style={styles.link} href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;

