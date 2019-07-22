import React, { Component } from "react";
import { getchocolatedetails } from "../actionCreaters/actionAC";
import { connect } from "react-redux";
import { NavBar } from "./NavBar";
import Header from "./Header";

class ChocolateDetails extends Component {
  componentDidMount() {
    console.log("reduce*******", this.props);
    this.props.dispatch(getchocolatedetails(this.props.match.params.id));
  }
  render() {
    console.log("/////", this.props);
    return (
      <div className="box column is ">
        {/* <NavBar />
        <Header /> */}
        {this.props.ChocolateDetails !== undefined && (
          <>
            {" "}
            <img src={this.props.ChocolateDetails.image} />
            <h1>{this.props.ChocolateDetails.name}</h1>
            <h2>{this.props.ChocolateDetails.desc}</h2>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("mapStatus*********", appState);
  return {
    ChocolateDetails: appState.chocolateReducer.ChocolateDetails
  };
}

export default connect(mapStateToProps)(ChocolateDetails);
