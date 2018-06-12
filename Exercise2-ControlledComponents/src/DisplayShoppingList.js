import React from 'react'
import PropTypes from "prop-types";

const DisplayShoppingList = props => {
    return (<div>
            <p className="items">Items</p>
            <ol className="item-list">
                {props.shoppingItems.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </div>
    )
};

DisplayShoppingList.propTypes = {
    shoppingItems: PropTypes.array.isRequired,
};

export default DisplayShoppingList;