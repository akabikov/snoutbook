import React from "react";
import { Link, NavLink } from "react-router-dom";
import data from "./data.json";

class NavBar extends React.Component {
  render() {
    const { listName } = this.props;
    const links = data[listName].map(({ name, src }) => (
      <li
        className='nav-item'
        data-toggle='collapse'
        data-target='#navbarNav'
        key={src}
      >
        <NavLink exact to={`/${listName}/${src}`} className='nav-link'>
          {name}
        </NavLink>
      </li>
    ));

    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to={`/${listName}`}>
          {listName.replace(/^\w/, (m) => m.toUpperCase())}
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li
              className='nav-item'
              data-toggle='collapse'
              data-target='#navbarNav'
            >
              <NavLink exact to={`/${listName}`} className='nav-link'>
                Home
              </NavLink>
            </li>
            {links}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
