import React from "react";
import { Link } from "react-router-dom";

class List extends React.Component {
  render() {
    const list = this.props.items.map(({ name, src, ...item }) => (
      <li key={name}>
        <Link to={`/dogs/${src}`}>
          <img src={`/img/${src}.jpg`} alt={name} />
          <h2>{name}</h2>
        </Link>
        {/* <Card name={name} src={src} {...item} /> */}
      </li>
    ));

    return <ul>{list}</ul>;
  }
}

export default List;
