import React, {Component} from 'react'

function DisplayShoppingList(props) {
    const {shoppingItems} = props
    return (<div>
            <p className="items">Items</p>
            <ol className="item-list">
                {shoppingItems.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </div>
    )
}

export default DisplayShoppingList;