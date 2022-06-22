import React from "react";
import Card from "./Card";



const Cards = ({ cards,  handleCardDeletion }) => {
    return (
        <>
            {cards.map( card => <Card card={card}  handleCardDeletion={handleCardDeletion}></Card> )}
        </>
    );
};

export default Cards;
