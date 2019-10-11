import React from "react";
import Register from "./Register";
import { BrowserRouter as Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul>
          <li>
            <Register />
          </li>
          <li>
            <Link to="/shoppingList">Create a shopping list</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
