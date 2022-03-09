import React, { Component } from "react";

import Cards from "./components/cards/cards.component";
import Search from "./components/search/search.component";

import "./App.css";

const API = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((users) => this.setState({ friends: users }));
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState({ search: searchField });
  };

  render() {
    const { friends, search } = this.state;
    const { onSearchChange } = this;

    const filteredFriends = friends.filter((friend) =>
      friend.name.toLocaleLowerCase().includes(search)
    );
    return (
      <div>
        <Search
          className="search-friends"
          onChangeHandler={onSearchChange}
          placeholder="search friends"
        />

        <Cards friends={filteredFriends} />
      </div>
    );
  }
}

export default App;
