import React, { Component } from "react";
import Api from "../api/Api";
import ShoppingListForm from "./ShoppingListForm";
import { Container, Button, Row, Col } from "react-bootstrap";
import ShoppingList from "./ShoppingList";
import ShoppingListProductShow from "./ShoppingListProductShow";
import ShoppingListShow from "./ShoppingListShow";

class ShoppingListPage extends Component {
  state = {
    shoppingLists: null,
    showShoppingListForm: false,
    showShoppingListProduct: false,
    handleShowShoppingList: false,
    currentShoppingList: null,
    currentProducts: [],
    isLoaded: false
  };

  getUserShoppingList = () => {
    Api.get("shopping_lists/").then(res => {
      console.log(res.data);
      const lists = res.data;
      const id = localStorage.id;
      let userShoppingList = lists.filter(list => {
        if (list.user === Number(id)) {
          return list;
        }
        return;
      });
      this.setState({
        shoppingLists: userShoppingList,
        isLoaded: !this.state.loaded
      });
    });
  };

  handleShowShoppingListForm = () => {
    const { showShoppingListForm } = this.state;
    this.setState({ showShoppingListForm: !showShoppingListForm });
  };
  handleShowShoppingList = (shoppingList, products) => {
    const { showShoppingList } = this.state;

    this.setState({
      showShoppingList: !showShoppingList,
      currentShoppingList: shoppingList,
      currentProducts: products
    });
  };
  componentDidMount() {
    this.getUserShoppingList();
  }

  render() {
    const {
      showShoppingListForm,
      showShoppingListProduct,
      showShoppingList,
      shoppingLists,
      currentShoppingList,
      currentProducts,
      isLoaded
    } = this.state;

    return (
      <>
        <div>
          {showShoppingListForm ? (
            <ShoppingListForm
              handleShowShoppingList={this.handleShowShoppingList}
            />
          ) : (
            <Container className="shopping-list-container">
              <Row>
                <h2>Your Shopping Lists</h2>
                <Col xs={12} md={12} lg={6}></Col>
                <Col xs={12} md={12} lg={6}>
                  {isLoaded && (
                    <ShoppingList
                      shoppingList={shoppingLists}
                      currentShoppingList={currentShoppingList}
                      handleShowShoppingList={this.handleShowShoppingList}
                      products={currentProducts}
                    />
                  )}
                </Col>
                <Col xs={12} md={12} lg={6}></Col>
              </Row>

              <Button onClick={this.handleShowShoppingListForm}>
                Click to add a shopping list
              </Button>

              {showShoppingListProduct && <ShoppingListProductShow />}
              {showShoppingList && (
                <ShoppingListShow
                  currentShoppingList={currentShoppingList}
                  handleShowShoppingList={this.handleShowShoppingList}
                />
              )}
            </Container>
          )}
        </div>
      </>
    );
  }
}

export default ShoppingListPage;
