import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import "./List.css";

class List extends React.Component {
  render() {
    const { listName } = this.props;

    const list = data[listName].map(({ name, src, ...item }) => (
      <li className='list-item col-lg-4 text-center mt-5' key={name}>
        <Link to={`/${listName}/${src}`}>
          <img src={`/img/${src}.jpg`} alt={name} />
          <h3 className='underline mt-4'>{name}</h3>
        </Link>
      </li>
    ));

    return <ul className='row'>{list}</ul>;
  }
}

export default List;
