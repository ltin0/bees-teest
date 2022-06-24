import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Cards from "./components/Cards";

import FormInput from "./components/FormInput";
import HeaderCards from "./components/HeaderCards";
import TextHeadMain from "./components/TextHeadMain";

const App = () => {
    const [cards, setCards] = useState([]);
    const [nome, setNome] = useState([]);

    useEffect(() => {
        window.localStorage.setItem("save-id", JSON.stringify(nome));
    }, []);

    useEffect(() => {
        const fetchCards = async () => {
            const { data } = await axios.get(
                "https://api.openbrewerydb.org/breweries"
            );

            setCards(data);
        };

        fetchCards();
    }, []);

    const handleCardDeletion = (cardId) => {
        const newCards = cards.filter((card) => card.id !== cardId);

        setCards(newCards);
    };

    return (
        <Router>
            <Route
                path="/"
                exact
                render={() => (
                    <>
                        <div className="bg">
                            <div className="container">
                                <TextHeadMain />
                                <FormInput setNome={setNome} />
                            </div>
                        </div>
                    </>
                )}
            ></Route>
            <Route
                path="/cards"
                exact
                render={() => (
                    <>
                        <HeaderCards nome={nome} />

                        <div className="scd-pg-container">
                            <Cards
                                cards={cards}
                                handleCardDeletion={handleCardDeletion}
                            ></Cards>
                        </div>
                    </>
                )}
            ></Route>
        </Router>
    );
};

export default App;
