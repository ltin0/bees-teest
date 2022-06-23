import React, { useEffect } from "react";
import "./style/HeaderCards.css";
import { CgArrowLeftO } from "react-icons/cg";
import { useHistory } from "react-router-dom";

const HeaderCards = ({ nome }) => {
    useEffect(() => {
        window.localStorage.getItem("save-d", JSON.stringify(nome));
    }, []);

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
