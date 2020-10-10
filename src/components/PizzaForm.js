import React from "react"

class PizzaForm extends React.Component {
  
  state = {
    topping: "",
    size: "",
    veg: null,
    id: ""
  }

  componentDidUpdate(prevProps, prevState){

    if (prevProps !== this.props){
      this.setState({
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        veg: (this.props.pizza.vegetarian ? "Vegetarian" : "Not Vegetarian"),
        id: this.props.pizza.id
      })
    }
  }

  editTopping = (e) => {
    this.setState({topping: e.target.value})
  }

  editSize = (e) => {
    this.setState({size: e.target.value})
  }

  editVeg = (e) => {
    this.setState({veg: e.target.value})
  }

  
 render(){

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={this.editTopping} className="form-control" placeholder="Pizza Topping" value={this.state.topping}/>
        </div>
        <div className="col">
          <select onChange={this.editSize} value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={this.editVeg} type="radio" value="Vegetarian" checked={this.state.veg === "Vegetarian" ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={this.editVeg} type="radio" value="Not Vegetarian" checked={this.state.veg === "Not Vegetarian" ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>this.props.submitPizza(this.state)}>Submit</button>
        </div>
      </div>

  )
 }
}

export default PizzaForm
