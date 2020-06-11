import React from "react";

class Card extends React.Component {
  render() {
    const { name, src, age, facts } = this.props;

    return (
      <div>
        <img src={`/img/${src}.jpg`} alt={name} />
        <h2>{name}</h2>
        <p>{age} years old</p>
        {facts.map((fact, i) => (
          <p key={i}>{fact}</p>
        ))}
      </div>
    );
  }
}

export default Card;
