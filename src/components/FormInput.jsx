import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

import "./Form.css";
const FormInput = () => {

    //submit funct

    const history = useHistory();

    const handleSubmit = () => {
      // 👇️ redirect to /cards
      history.push('/cards');
    };


    //input text functions
    const [inputData, setInputData] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z ]/gi, '');

        setMessage(result)

        setInputData(event.target.value)
  
    }

    
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((current) => !current);
    };

  

    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input id="message" value={inputData, message} onChange={handleChange} type="text" placeholder="Full Name" required />
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
