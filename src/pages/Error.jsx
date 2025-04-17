import React from 'react'
import { Link, useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error);

    if (error.status === 404) {
        return (
            <div className='errorPage'>
                <h4>The resource requested is no longer available.</h4>

                <Link to="/">Home</Link>
            </div>
        );
    }
    return (
        <div className='errorPage'>
            <h4>Oops! An issue has ocurred. Please try again later!</h4>
        
            <Link to="/">Home</Link>
        </div>
    )
}

export default Error;