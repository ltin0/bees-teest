import React, { useEffect } from "react";
import "./style/HeaderCards.css";
import { CgArrowLeftO } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { selectUser } from "../redux/slice";

const HeaderCards = () => {
    
    const {nome} = useSelector(selectUser)
        
    const routerHistory = useHistory();
	const handleBackButtonClick = (e) => {
		routerHistory.push("/");
	};

    return (
        <div className="header-container">
            <>
                <div className="back-click-sect" onClick={handleBackButtonClick} >
                    <CgArrowLeftO ></CgArrowLeftO > <h2 >Go Back</h2>
                </div>
                <div className="name-header-sect">
                    <h2>{nome}</h2>
                </div>
            </>
        </div>
    );
};

export default HeaderCards;
