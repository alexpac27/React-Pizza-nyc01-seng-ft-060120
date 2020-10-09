import React, {useState} from "react"

const PizzaForm = (props) => {
  
  
  console.log("checking props", props.pizza.vegetarian)
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={props.pizza.topping}/>
        </div>
        <div className="col">
          <select value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.pizza.vegetarian ? "true" : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.pizza.vegetarian ? null : "true"}/>
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

export default PizzaForm
