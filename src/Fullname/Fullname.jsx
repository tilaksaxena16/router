import React from "react";
import "./Fullname.css";

const Fullname = (user) => {

    return (
        <>
            <div>
                <i className="fa-regular fa-user fullname-icon"></i>
                <label className="fullname-container">{user.name}</label>
            </div>
        </>
    )
}

export { Fullname }