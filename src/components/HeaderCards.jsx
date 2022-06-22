import React from "react";
import "./HeaderCards.css"
import { CgArrowLeftO } from "react-icons/cg";
import {useHistory} from 'react-router-dom';

const HeaderCards = () => {

    const history = useHistory();

    const handleBack = () => {
  
    history.goBack();
   };



    return (
        <div className="header-container">
            <>
                <div className="back-click-sect" onClick={handleBack}>
                    <CgArrowLeftO></CgArrowLeftO> <h2>Go Back</h2>
                </div>
                <div className="name-header-sect">
                    <h2>Full Name</h2>
                </div>
            </>
        </div>
    );
};

export default HeaderCards;
