import React from "react";
import { connect } from "react-redux";
import { getInput, getSubmit } from "../actionCreaters/actionAC";
import { Redirect, Link } from "react-router-dom";
import { home } from "../home";
//import Header from "./Header";
function Login(props) {
  const { isLoginSuccess } = props;
  const changeInput = e => {
    console.log("change", e.target.name, e.target.value);
    props.dispatch(getInput(e.target.name, e.target.value));
  };

  const handleChangeInput = e => {
    e.preventDefault();
    console.log("--", props.email, props.password);
    setTimeout(console.log("HIIIIII"), 10000);
    // let body = {
    //   email: props.email,
    //   password: props.password
    // };
    props.dispatch(getSubmit(props.email, props.password));
  };

  return (
    <div>
      {isLoginSuccess ? (
        <div>
          <Redirect to="/home" />
        </div>
      ) : (
        <div>
          <center>
            <form className="form" onSubmit={handleChangeInput}>
              <h1>Login</h1>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={props.email}
                placeholder="Enter Email"
                pattern=".+@gmail.com"
                required
                onChange={changeInput}
              />
              <br />
              <br />
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={props.password}
                placeholder="Enter password"
                onChange={changeInput}
              />
              <br />
              <br />
              <button
                value="Login"
                style={{ color: "blue", backgroundColor: "red" }}
              >
                Login
              </button>
              <br />
              Create a New Account?
              <button type="submit">
                <Link to={"/Signup"}>Signup</Link>
              </button>
            </form>
          </center>
        </div>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    SuccessData: state.loginReducer.SuccessData,
    isLoginSuccess: state.loginReducer.isLoginSuccess
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Login);
