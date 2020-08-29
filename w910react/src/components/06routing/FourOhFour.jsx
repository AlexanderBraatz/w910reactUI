import React from "react" ;
import { Link } from "react-router-dom";

const FourOhFour = () => (
    <p>
        404 | Page not found | <Link to="/welcome">Return to welcome page here</Link>
    </p>
)

export default FourOhFour;
