import React, { Component } from "react";
import { getbranddetails } from "../actionCreaters/actionAC";
import { connect } from "react-redux";
import { NavBar } from "./NavBar";
import Header from "./Header";

class BrandDetails extends Component {
  componentDidMount() {
    console.log("id************", this);
    this.props.dispatch(getbranddetails(this.props.match.params.id));
  }
  render() {
    return (
      <div>
        {/* <NavBar />
        <Header /> */}

        {this.props.branddetails.map(c => (
          <div>
            <b> {c.name}</b>
            <br />
            {c.desc}
            <br />
            <img src={c.image} />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("appState*********", appState);
  return {
    branddetails: appState.brandReducer.BrandDetails
  };
}
export default connect(mapStateToProps)(BrandDetails);
