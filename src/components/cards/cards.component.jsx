import React, { Component } from "react";

import "./cards.styles.css";

class Cards extends Component {
  render() {
    const { friends } = this.props;
    return (
      <div className="cards">
        {friends.map((friend) => {
          const { id, name, email } = friend;

          return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/${id}?set==set2&size=180x180`}
                alt={`friend ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
