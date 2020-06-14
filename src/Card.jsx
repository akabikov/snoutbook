import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import data from "./data.json";

class Card extends React.Component {
  render() {
    const { listName, src, history } = this.props;

    const item = data[listName].find((el) => el.src === src);

    if (!item) return <Redirect to={`/${listName}`} />;

    const { name, age, facts } = item;
    const factsList = facts.map((fact, i) => <p key={i}>{fact}</p>);

    return (
      <div>
        <img src={`/img/${src}.jpg`} alt={name} />
        <h2>{name}</h2>
        <p>{age} years old</p>
        {factsList}
        <button onClick={history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default withRouter(Card);
