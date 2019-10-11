import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <h1>Welcome To Shop It</h1>
      </div>
    );
  }
}

export default Home;
