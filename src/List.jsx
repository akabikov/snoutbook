import React from "react";

class List extends React.Component {
  render() {
    const list = this.props.items.map(({ name, src }) => (
      <li key={name}>
        <img src={`/img/${src}.jpg`} alt={name} />
        <h2>{name}</h2>
      </li>
    ));

    return <ul>{list}</ul>;
  }
}

export default List;
