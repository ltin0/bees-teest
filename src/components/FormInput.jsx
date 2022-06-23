import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./style/Form.css";
const FormInput = ({ setNome }) => {
    const [formValues, updateFormValue] = useState({});
    const [message, setMessage] = useState('');

    //submit funct
    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z ]/gi, '');
    
        setMessage(result);
      };
    
    const routerHistory = useHistory();

    const handleSubmit = (e) => {
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
