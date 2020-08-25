import React from "react";

const Square = ({ colour }) => (
    <div style={{height:200, width:200, backgroundColor:(colour ? colour : "red") }} ></div>
    /* in Css ^this would be style = "height: 200px; width : 200px; backgroundColour: red;"
    this is done by react so inline style s can easily accept DOM style objects */
)

export default Square;