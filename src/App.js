import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'


class App extends Component {

  state = {
    pizza: {}
  }

  editPizza = (pizzaObj) => {
    this.setState({pizza: pizzaObj})
  }

  submitPizza = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`,{
      method: "PATCH",
      headers: {
        "content-type" : "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: (pizza.veg === "Vegetarian" ? true : false)
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState({pizza: data}))
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizza} submitPizza={this.submitPizza}/>
        <PizzaList edit={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
