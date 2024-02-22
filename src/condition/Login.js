import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Login = ( ) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);

  const handleLogin = () =>{
    if(username === "admin" && password === "admin@123"){
        setloggedIn(true)
    }
    else{
        alert("invalid credentials")
    }
  }

  return (
    <>
      <div>
        {loggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button>Logout</button>
          </>
        ) : (
          <div>
            <label>Enter Your Name </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <br/> <br/>
            <label>Enter Your Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <br/> <br/>
            <Button className="bg-dark" onClick={handleLogin}>Login</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
