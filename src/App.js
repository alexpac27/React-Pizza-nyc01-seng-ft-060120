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


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizza}/>
        <PizzaList edit={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
