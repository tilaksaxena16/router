import React from "react";
import "./Email.css";

const Email = (user) => {

    return (
        <>
            <div>
                <i className="fa-solid fa-lock email-icon"></i>
                <label className="email-container">{user.name}</label>
            </div>
        </>
    )
}

export { Email }