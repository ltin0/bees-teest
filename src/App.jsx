import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import FormInput from "./components/FormInput";
import HeaderCards from "./components/HeaderCards";
import TextHeadMain from "./components/TextHeadMain";

const App = () => {
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
                        <div className="container">

                        </div>
                    </>
                )}
            ></Route>
        </Router>
    );
};

export default App;
