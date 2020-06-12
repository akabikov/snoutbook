import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";

class List extends React.Component {
  render() {
    const { listName } = this.props;

    const list = data[listName].map(({ name, src, ...item }) => (
      <li key={name}>
        <Link to={`/${listName}/${src}`}>
          <img src={`/img/${src}.jpg`} alt={name} />
          <h2>{name}</h2>
        </Link>
      </li>
    ));

    return <ul>{list}</ul>;
  }
}

export default List;
