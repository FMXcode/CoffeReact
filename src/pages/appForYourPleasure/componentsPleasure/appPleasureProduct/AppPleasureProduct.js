import './appPleasureProduct.scss';
import React from "react";
import AppPleasureCards from "../appPleasureCards/AppPleasureCards";

function AppPleasureProduct(props) {
    const dataCards = [
        {id: '1', title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
        {id: '2', title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
        {id: '3', title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
        {id: '4', title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
        {id: '5', title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
        {id: '6', title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
    ]

    const elements = dataCards.map(item => {
        const {id, ...itemProps} = item;
        return (
            <AppPleasureCards
                key={id}
                {...itemProps}
            />
        )
    })
    return (
        <div className="appPleasureProduct">
            {elements}
        </div>
    );
}

export default AppPleasureProduct;