import { Component } from "react";
import "./App.css";
import data from './data/productData';

class App extends Component{
  constructor(){
    super();
    this.state={
      shoppingList: data,
      shoppingArr:[],
      subtotal: 0,

      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: ""
    }
  }

  handleitemClick=(item)=>{
    this.setState({
      shoppingArr: [...this.state.shoppingArr, item],
      
    })
  }

  // handleSubtotal=(item)=>{
  //   let subtotal = 0;
    
  //   this.setState({
  //     subtotal: subtotal+ item.price
  //   })
  // }
  
  handleSubmit=()=>{
    // e.prevent.Default();
    alert("Purchase complete")
    console.log("Trigger");
  }
  handleFirstName =(e)=>{
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastName =(e)=>{
    this.setState({
      lastName: e.target.value
    })
  }

  handleCreditCard =(e)=>{
    this.setState({
      creditCard: e.target.value
    })
  }

  handleEmail =(e)=>{
    this.setState({
      email: e.target.value
    })
  }

  handleZipcode =(e)=>{
    this.setState({
      zipCode: e.target.value
    })
  }

  render(){
    let shoppingList= this.state.shoppingList.map((item)=>{
      return (
        <div className="shoppingcart-item-container"
            onClick= {()=>this.handleitemClick(item)}
        >
            <div><strong>{item.name}</strong></div>
            <div>Price: ${item.price}</div>
            <button type="Submit">Add to cart</button>
            <div>{item.description}</div>
            <img src={item.img} alt="itme image"/>
        </div>
        
      )
    })

    let shoppingItemArr = this.state.shoppingArr.map((item)=>{
      return(
        <div>
          <li>{item.name}: ${item.price}</li>
          
        </div>
      )
    })
    return(
      <div className="app" id="app-container">
        <h1>My Garage Sale</h1>
        <div class="shoppingcart-list-container">
          
            {shoppingList}
          
          <div class="form">
            <h2>Cart</h2>
            <ul>
                {shoppingItemArr}
            </ul>
                
            <div><strong>Subtotal: {this.handleSubtotal}</strong></div>
            <div><strong>Tax:</strong></div>
            <div><strong>Total:</strong></div>
      
            <h2>Checkout</h2>
          
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="first-name">First Name</label>
            <input
              onInput={this.handleFirstName}
              value={this.state.firstName}
              type="text"
              name="first-name"
              id="first-name"
            />
            <br></br>
            <label htmlFor="last-name">Last Name</label>
            <input
              onInput={this.handleLasttName}
              value={this.state.lastName}
              type="text"
              name="last-name"
              id="last-name"
            />
            <br></br>
            <label htmlFor="first-name">Email</label>
            <input
              onInput={this.handleEmail}
              value={this.state.email}
              type="text"
              name="email"
              id="email"
            />
            <br></br>
            <label htmlFor="credit-card">Credit Card</label>
            <input
              onInput={this.handleCreditCard}
              value={this.state.creditCard}
              type="text"
              name="credit-card"
              id="credit-card"
            />
            <br></br>
            <label htmlFor="zipcode">Zip Code</label>
            <input
              onInput={this.handleZipcode}
              value={this.state.zipCode}
              type="text"
              name="zipcode"
              id="zipcode"
            />
            <br></br>
            <button type="submit">Buy Now</button>
          </form>
        </div>
      </div>   
     </div>  
    )
  }
}

export default App;
