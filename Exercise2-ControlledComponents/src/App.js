import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayShoppingList from "./DisplayShoppingList";
import DeleteShoppingItem from './DeleteShoppingItem'
import AddShoppingItem from './AddShoppingItem'

class App extends React.Component {
  state = {
    items: []
  };

  addItem = (event, item) => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = () => {
    this.setState({ items: this.state.items.slice(0, -1) });
  };

  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <h2>Shopping List</h2>

            <AddShoppingItem addItemHandler={this.addItem}/>

            <DeleteShoppingItem shoppingItems={this.state.items} deleteLastItem={this.deleteLastItem}/>

            <DisplayShoppingList shoppingItems={this.state.items}/>
        </div>
    );
  }
}

export default App;
