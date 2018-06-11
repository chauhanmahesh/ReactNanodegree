import React, {Component} from 'react'

class DeleteShoppingItem extends Component {

    noItemsFound = (items) => {
        return items === 0;
    };

    render() {
        const {shoppingItems, deleteLastItem} = this.props
        return (
            <button onClick={deleteLastItem} disabled={this.noItemsFound(shoppingItems)}>
                Delete Last Item
            </button>
        )
    }

}

export default DeleteShoppingItem