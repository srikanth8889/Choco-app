import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getsearch } from "../actionCreaters/actionAC";
export function NavBar(props) {
  return (
    <nav>
      <div class="head">
        <NavLink to="/" exact>
          <label class="textcol"> HOME</label>
        </NavLink>

        <NavLink to="/BRANDS" exact>
          <label class="textcol"> BRANDS</label>
        </NavLink>

        <NavLink to="/CHOCOLATES" exact>
          <label class="textcol">CHOCOLATES</label>
        </NavLink>

        <NavLink to="/LOGIN" exact>
          <label class="textcol"> LOGIN</label>
        </NavLink>

        <NavLink to="/SIGNUP" exact>
          <label class="textcol"> SIGNUP</label>
        </NavLink>
        <NavLink to="/LOGIN" exact>
          LOGOUT
        </NavLink>

        <NavLink to="/SEARCH" exact>
          <input
            type="text"
            placeholder="search"
            onChange={e => {
              props.dispatch(getsearch(e.target.value));
            }}
          />
        </NavLink>

        {/* <button class="exitSign">
          <Link to="/LOGIN" />
          Logout
        </button> */}
      </div>
    </nav>
  );
}
function mapStateToProps(state) {
  return {
    searchWord: state.searchReducer.searchWord
  };
}
export default connect(mapStateToProps)(NavBar);
