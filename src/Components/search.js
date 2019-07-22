import React, { Component } from "react";
import { connect } from "react-redux";
import ChocolateListItem from "./ChocolateListItems";
import { getchocolate } from "../actionCreaters/actionAC";

class SearchChoco extends Component {
  componentDidMount() {
    this.props.dispatch(getchocolate());
  }

  render() {
    console.log(this.props.searchChocolates);
    return (
      <>
        {this.props.searchChocolates !== undefined && (
          <>
            {this.props.searchChocolates.map(b => (
              <li>
                <ChocolateListItem {...b} />
              </li>
            ))}
          </>
        )}
      </>
      //   <>
      //   <input type="text" placeholder="search" onChange={searchchange}/>
      //       <input type="button" name="search" value="search" />
      //       </>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchChocolates: state.searchReducer.searchChocolates,
    searchWord: state.searchReducer.searchWord
  };
}
export default connect(mapStateToProps)(SearchChoco);
