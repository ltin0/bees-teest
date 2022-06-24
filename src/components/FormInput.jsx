import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import "./style/Form.css";
import { changeUser } from "../redux/slice";
const FormInput = () => {
    const [message, setMessage] = useState("");
    const [nome, setNome] = useState('');

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(changeUser(nome))
      }

    //submit funct
    const handleChange = (event) => {
        const result = event.target.value.replace(/[^a-z ]/gi, "");

        setMessage(result);
    };

    const routerHistory = useHistory();

    const handleSubmit = () => {
        // 👇️ redirect to /cards
        routerHistory.push("/cards");
    };

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((current) => !current);
    };

    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setNome(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                        required
                    />
                    <div className="checkbox-sect">
                        <input
                            type="checkbox"
                            className="check-box"
                            required
                            onClick={handleClick}
                        />
                        <p> Are you older than 18 years old ?</p>
                    </div>
                    <input
                        type="submit"
                        onClick={handleLogin}
                        style={{
                            backgroundColor: isActive ? "#5D5FEF" : "#52525B",
                            color: isActive ? "white" : "",
                            cursor: isActive ? "pointer" : "hand",
                        }}
                        value="Enter"
                    />
                </form>
            </div>
        </>
    );
};

export default FormInput;
