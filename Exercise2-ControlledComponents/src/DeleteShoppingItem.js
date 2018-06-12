import React from 'react'
import PropTypes from "prop-types";


const DeleteShoppingItem = props => {

    const noItemsFound = (items) => {
        return items === 0;
    };

    return (
        <button onClick={props.deleteLastItem} disabled={noItemsFound(props.shoppingItems)}>
            Delete Last Item
        </button>
    )
};

DeleteShoppingItem.propTypes = {
    shoppingItems: PropTypes.array.isRequired,
    deleteLastItem: PropTypes.func.isRequired,
};

export default DeleteShoppingItem