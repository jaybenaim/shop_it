import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingListPage from "./ShoppingListPage";

class Home extends React.Component {
  render() {
    return (
      <div className="App container">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <h1>Welcome To Shop It</h1>
            </Route>
            <Route path="/shoppingList">
              <ShoppingListPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
