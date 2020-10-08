import React, { Component } from 'react';
import Pizza from '../components/Pizza'


class PizzaList extends Component {

  state = {
    pizzaArray: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(data => this.setState({pizzaArray: data}))
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.pizzaArray.map(pizza => <Pizza key={pizza.id} pizza={pizza} />)}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
