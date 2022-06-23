import React from "react";
import "./style/Card.css";

import { CgSignal, CgPin, CgPhone, CgMathPlus, CgTrash } from "react-icons/cg";

const Card = ({ card,  handleCardDeletion }) => {
    return (
        <>
            <div className="card-container">
                <h3>{card.title}</h3>
                <div className="btn-remove">
                    <button onClick={() => handleCardDeletion(card.id)} className="remove-card-button"><CgTrash/></button>
                </div>
                <p>
                    {card.city},{card.state} - {card.country}
                </p>
                <div className="itens-card">
                    <span >
                        <CgSignal className="svg-border" />
                        {card.brewery_type}
                    </span>
                    <span>
                        <CgPin />
                        {card.postal_code}
                    </span>
                </div>
                <div className="itens-card">
                    <span>
                        <CgPhone />
                        {card.phone}
                    </span>
                    <span>
                        <CgMathPlus />
                        Add more
                    </span>
                </div>
            </div>
        </>
    );
};

export default Card;
