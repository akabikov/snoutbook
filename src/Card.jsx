import React from "react";
import { Redirect } from "react-router-dom";
import data from "./data.json";

class Card extends React.Component {
  render() {
    const { listName, src } = this.props;

    const [item] = data[listName].filter((el) => el.src === src);

    if (!item) return <Redirect to={`/${listName}`} />;

    const { name, age, facts } = item;
    const factsList = facts.map((fact, i) => <p key={i}>{fact}</p>);

    return (
      <div>
        <img src={`/img/${src}.jpg`} alt={name} />
        <h2>{name}</h2>
        <p>{age} years old</p>
        {factsList}
      </div>
    );
  }
}

export default Card;
