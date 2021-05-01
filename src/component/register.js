import React, { useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";
import "./login.css";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function createUser(e) {
    if (name.length > 0 && password.length > 0) {
      const user = { name: name, password: password };
    //   alert(user);
      if (!localStorage.getItem(user.name)) {
        localStorage.setItem(user.name, user.password);
        alert("User Created",user.name);
        history.push("/");
      }
    } else {
      alert("blank values");
    }
    e.preventDefault();
  }
  return (
    <div className="loginParent">
      <div className="formParent">
        <form>
          <h1>Register</h1>
          <h4>Name</h4>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <h4>Password</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="parentOfLogin">
            <button
              className="registerButton"
              type="submit"
              onClick={(e) => createUser(e)}
            >
              Register
            </button>
            <Link to="/">
              <button className="altButton">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
