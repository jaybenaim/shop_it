import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Api from "../api/Api";
import { passCsrfToken } from "../util/helpers";
import axios from "axios";
class ShoppingListForm extends Component {
  state = {};
  budgetRef = React.createRef();
  nameRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    let name = this.nameRef.current.value;
    let budget = this.budgetRef.current.value;
    let user = localStorage.name;
    Api.post("shopping_lists/", { user, listname: name, budget }).then(res => {
      console.log(res.statusText);
    });
  };
  componentDidMount() {
    passCsrfToken(document, axios);
  }
  render() {
    console.log(localStorage.token);
    const { handleShowShopppingList } = this.props;
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name of List</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={this.nameRef}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your budget"
            ref={this.budgetRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default ShoppingListForm;
