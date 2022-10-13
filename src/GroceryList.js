import { Component } from "react";

export class GroceryList extends Component {
    constructor(){
        super()
        this.state = {
        userInput: "",
        grocerylist: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }


    addItem(input) {
        if (input === '') {
            alert("Please enter items")
        } else {
        let listArray = this.state.grocerylist;
        listArray.push(input)
        this.setState({groceryList: listArray, userInput: ""})
    }
    }
    crossWord(event) {
    const Li = event.target;
    Li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.grocerylist;
        listArray.length = 0;
        this.setState({groceryList: listArray});
    }

    onFormSub(e) {
    e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSub}>
                <div className="container">
                    <input type="text" 
                    placeholder="What do you need buy?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value = {this.state.userInput}/>
                </div>
                    <div className="container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
                    </div>
                    <ul>
                        {this.state.grocerylist.map((item, index) => (
                            <li onClick={this.crossWord}  key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="container">
                    <button onClick={() => this.deleteItem()} className="delete ">Delete</button>
                    </div>
                    </form>
            </div>
        )
    }
}