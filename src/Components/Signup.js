import React, { Component } from "react";
import { input_change, getSignup } from "../actionCreaters/actionAC";
import { connect } from "react-redux";

function SignUp(props) {
  const handleChange = name => e => {
    props.dispatch(input_change(name, e.target.value));
  };
  const handleSubmit = e => {
    // e.preventDefalut();
    const { firstName, lastName, email, password } = props;
    const body = { firstName, lastName, email, password };
    props.dispatch(getSignup(body));
  };

  return (
    // <div><br/></div>
    <center>
      <h1>Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <h1>Sign Up Component</h1> */}
        <br />
        <br />
        <label>First Name:</label>
        <input
          type="text"
          value={props.firstName}
          placeholder="Enter FirstName"
          required
          onChange={handleChange("firstName")}
        />
        <br />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={props.lastName}
          placeholder="Enter lastName"
          required
          onChange={handleChange("lastName")}
        />
        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="Email"
          value={props.email}
          placeholder="Enter Email"
          required
          onChange={handleChange("email")}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={props.password}
          placeholder="Enter password"
          required
          onChange={handleChange("password")}
        />
        <br />
        <br />
        <button type="submit" style={{ color: "blue", backgroundColor: "red" }}>
          Signup
        </button>
      </form>
    </center>
  );
}

function mapStateToProps(state) {
  return {
    firstName: state.signupReducer.firstName,
    lastName: state.signupReducer.lastName,
    email: state.signupReducer.email,
    password: state.signupReducer.password,
    isLoading: state.signupReducer.isLoading
  };
}

export default connect(mapStateToProps)(SignUp);
