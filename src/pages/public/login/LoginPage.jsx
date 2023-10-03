import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROLE, TOKEN } from "../../../constants";
import Cookies from "js-cookie";
import { message } from "antd";

import "./login.scss";
import request from "../../../server/data";
import { AuthContext } from "../../../context/AuthContext";
const LoginPage = () => {
  const { setIsAuthenticated, setRole } = useContext(AuthContext);
  const [handleValue, setHandleValue] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      let {
        data: { token, role },
      } = await request.post("auth/login", handleValue);
      if (role === "user") {
        navigate("/my-blogs");
      } else if (role === "admin") {
        navigate("/dashboard");
      }
      Cookies.set(TOKEN, token);
      Cookies.set(ROLE, role);
      setIsAuthenticated(true);
      setRole(role);
    } catch (err) {
      message.error("Error");
    }
  };

  function handleChange(e) {
    setHandleValue({ ...handleValue, [e.target.id]: e.target.value });
  }
  return (
    <Fragment>
      <div className="container">
        <div className="Login">
          <form className="Login__form">
            <div className="Login__form__title">
              <h1>Login</h1>
            </div>
            <div className="Login__form__username">
              <input
                id="username"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="Login__form__password">
              <input
                id="password"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="password"
              />
            </div>
            <div className="Login__form__submit">
              <button onClick={login} type="submit">
                Login
              </button>
          
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
