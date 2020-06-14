import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import "./List.css";

class List extends React.Component {
  render() {
    const { listName } = this.props;

    const list = data[listName].map(({ name, src, ...item }) => (
      <li className='list-item col-lg-4 text-center' key={name}>
        <Link to={`/${listName}/${src}`}>
          <img src={`/img/${src}.jpg`} alt={name} />
          <h3 className='underline'>{name}</h3>
        </Link>
      </li>
    ));

    return <ul className='row mt-5'>{list}</ul>;
  }
}

export default List;
