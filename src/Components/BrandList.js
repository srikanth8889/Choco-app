import React, { Component } from "react";
import { getBrands } from "../actionCreaters/actionAC";
import { connect } from "react-redux";
import Brandsitems from "./Brandsitems";
import { NavBar } from "./NavBar";
import Header from "./Header";
class BrandList extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.dispatch(getBrands());
  }

  render() {
    //console.log(this.props.brands !== [], this.props.brands[0]);
    return (
      <>
        {/* <NavBar />
        <Header /> */}
        {this.props.brands[0] !== undefined && (
          <div>
            {this.props.brands.map(d => (
              <Brandsitems
                id={d.id}
                name={d.name}
                desc={d.desc}
                logo={d.logo}
                // handleBrands={this.handleBrandDetails}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps(appState) {
  return {
    brands: appState.brandReducer.brands
  };
}

export default connect(mapStateToProps)(BrandList);
