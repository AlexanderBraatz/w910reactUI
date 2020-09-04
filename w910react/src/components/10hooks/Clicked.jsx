import React, { useState } from "react";

const Clicked = () => {

    const [ clicked, setClicked ] = useState(false);
    const handleClick = () => setClicked(true);

    return (

        <p onClick= { handleClick } className="alert alert-primary mt-4">{clicked ? "clicked" : "Not clicked"}</p>
    );
}
export { Clicked };