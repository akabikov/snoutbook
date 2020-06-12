import React from "react";
import { NavLink } from "react-router-dom";
import data from "./data.json";

class NavBar extends React.Component {
  render() {
    const { listName } = this.props;
    const links = data[listName].map(({ name, src }) => (
      <NavLink
        exact
        to={`/${listName}/${src}`}
        activeClassName='nav-active'
        key={src}
      >
        {name}
      </NavLink>
    ));

    return (
      <nav>
        <NavLink exact to={listName} activeClassName='nav-active'>
          Home
        </NavLink>
        {links}
      </nav>
    );
  }
}

export default NavBar;
