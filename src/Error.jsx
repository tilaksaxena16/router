import React from "react";
import { Link } from "react-router-dom";



const Error = () => {

    return (
        <>
            <div>
                <h1>Oops! This is a Error page</h1>
                <Link to='/login'>Go to login page</Link> <br></br>
                <Link to='/registration'>Go to registration page</Link>
            </div>
        </>
    )
}
export { Error } 