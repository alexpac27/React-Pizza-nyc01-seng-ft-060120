import React from "react"

class PizzaForm extends React.Component {
  
  state = {
    topping: "",
    size: "",
    veg: ""
  }

  componentDidUpdate(prevProps, prevState){

    if (prevProps !== this.props){
      this.setState({
        topping: this.props.pizza.topping,
        size: this.props.pizza.size,
        veg: this.props.pizza.vegetarian
      })
    }
  }
  
 render(){

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping}/>
        </div>
        <div className="col">
          <select value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.veg ? true : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.veg ? true : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>console.log("submit")}>Submit</button>
        </div>
      </div>

  )
 }
}

export default PizzaForm
