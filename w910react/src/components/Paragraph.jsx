import React from "react";

const Paragraph = ({ children }) => (
    <p className="lead" >{ children ? children :  "Hello, world" }</p>
);


export default Paragraph;