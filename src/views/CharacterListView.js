import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getData } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("in CDM");
    this.props.getData();
  }

  render() {
    if (this.props.isLoading) {
      return <h2> Loading data! </h2>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
// console.log(state);

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading
  // error: state.charsReducer.error
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getData
  }
)(CharacterListView);
