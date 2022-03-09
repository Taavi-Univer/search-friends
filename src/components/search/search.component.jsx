import { Component } from "react";

import "./search.styles.css";

class Search extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;

    return (
      <div>
        <input
          className={`search ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default Search;
