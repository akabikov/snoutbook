import React from "react";
import Card from "./Card";

class List extends React.Component {
  render() {
    const list = this.props.items.map(({ name, src, ...item }) => (
      <li key={name}>
        {/* <img src={`/img/${src}.jpg`} alt={name} />
        <h2>{name}</h2> */}
        <Card name={name} src={src} {...item} />
      </li>
    ));

    return <ul>{list}</ul>;
  }
}

export default List;
