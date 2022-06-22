import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";

import "./App.css";
import Cards from "./components/Cards";

import FormInput from "./components/FormInput";
import HeaderCards from "./components/HeaderCards";
import TextHeadMain from "./components/TextHeadMain";

const App = () => {
    const [cards, setCards] = useState([
        {
            id:"1",
            title: "Banjo Brewing",
            type: "planning",
            city:"Fayetteville",
            state: "West Virginia",
            country: "United States",
            postal_code: "25840",
            phone: "3042164231",
            completed: false,
        },
        {
            id:"2",
            title: "comer",
            completed: false,
        },
        {
            id:"3",
            title: "dormir",
            completed: false,
        },
        
    ]);

    useEffect(() => {
        const fetchCards = async () => {
            const { data } = await axios.get('https://api.openbrewerydb.org/breweries')
            
            setCards(data);
        };
        

        fetchCards();
    },[]); 

    const handleCardDeletion = (cardId) => {
        const newCards = cards.filter(card => card.id !== cardId)

        setCards(newCards);
    }
  
    
    return (
        <Router>
            <Route
                path="/"
                exact
                render={() => (
                    <div className="bg">
                        <div className="container">
                            <TextHeadMain />
                            <FormInput />
                        </div>
                    </div>
                )}
            ></Route>
            <Route
                path="/cards"
                exact
                render={() => (
                    <>
                        <HeaderCards />
                        <div className="scd-pg-container">
                            <Cards cards={cards}  handleCardDeletion={ handleCardDeletion} ></Cards>
                        </div>
                    </>
                )}
            ></Route>
        </Router>
    );
};

export default App;
