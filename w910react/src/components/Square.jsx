import React from "react";

const Square = () => (
    <div style={{height:200, width:200, backgroundColor:"red"}} ></div>
    /* in Css ^this would be style = "height: 200px; width : 200px; backgroundColor: red;"
    this is done by react so inline style s can easily accept DOM style objects */
)

export default Square;