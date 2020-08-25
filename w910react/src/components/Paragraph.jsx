import React from "react";

const Paragraph = ({ message }) => (
    <p className="lead" >{ message ? message :  "Hello, world" }</p>
);


export default Paragraph;