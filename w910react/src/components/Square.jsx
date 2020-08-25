import React from "react";

const Square = ({ colour , square = true }) => (
    square ? (
        <div style={{height:200, width:200, backgroundColor:(colour ? colour : "red") }} ></div>
    ) : null
);
   
    
    
    /* in Css ^this would be style = "height: 200px; width : 200px; backgroundColour: red;"
    this is done by react so inline style s can easily accept DOM style objects */

export default Square;