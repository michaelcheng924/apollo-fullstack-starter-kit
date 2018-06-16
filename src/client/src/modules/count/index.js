import React, { Component } from "react";
import { compose } from "react-apollo";

import {
  changeCountInputQuery,
  countQuery,
  changeCountMutation,
  updateChangeCountInputMutation
} from "./graphql";

class Count extends Component {
  updateChangeCountInput = event => {
    const { updateChangeCountInput } = this.props;

    updateChangeCountInput(event.target.value);
  };

  changeCount = event => {
    event.preventDefault();

    const {
      changeCount,
      changeCountInput,
      updateChangeCountInput
    } = this.props;

    changeCount(Number(changeCountInput));
    updateChangeCountInput("");
  };

  render() {
    const { count, changeCountInput, loading } = this.props;

    if (loading) {
      return <h2>Loading</h2>;
    }

    return (
      <div>
        Count: {count}
        <form onSubmit={this.changeCount}>
          <input
            onChange={this.updateChangeCountInput}
            placeholder="Change count"
            type="number"
            value={changeCountInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default compose(
  changeCountInputQuery,
  countQuery,
  changeCountMutation,
  updateChangeCountInputMutation
)(Count);
