import React, { Component } from "react";
import { getchocolate } from "../actionCreaters/actionAC";
import ChocolateListItem from "./ChocolateListItems";
import { connect } from "react-redux";
import { NavBar } from "./NavBar";
import Header from "./Header";

class ChocolateList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("Hi");
    this.props.dispatch(getchocolate());
  }
  render() {
    console.log(this.props.chocolates);

    return (
      <div className="box column is multiline">
        {/* <NavBar />
        <Header /> */}
        {this.props.chocolates.map(c => (
          <ChocolateListItem
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            desc={c.desc}
            // handleChocolate={this.handleChocolateDetails}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    chocolates: appState.chocolateReducer.chocolates
  };
}

export default connect(mapStateToProps)(ChocolateList);
