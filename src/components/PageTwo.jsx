import React from 'react';
import { Link } from '@reach/router';

const PageTwo = props => {
    return (
        <>
            <div className="mt-4 text-center">
                {
                    !isNaN(+props.var) ?
                        <h1>The Number is: {props.var}</h1>
                        : <h1>The Word is: <span className="text-capitalize">{props.var}</span> </h1>}
            </div>
            <div className="row mt-4">
                <div className="col-9"></div>
                <div className="col-3">
                    <Link to="/hello/blue/red">PageThree</Link>
                </div>
            </div>
        </>
    );
}
export default PageTwo;