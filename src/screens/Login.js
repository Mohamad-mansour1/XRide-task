import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://task.mohamadmansour.me/api/login", {
        email: username,
        password: password,
      })
      .then(function (response) {
        if (response.data.success) {
          localStorage.setItem("isLogged", true);
          navigate("/Products");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          id="username"
          placeholder="Email"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
