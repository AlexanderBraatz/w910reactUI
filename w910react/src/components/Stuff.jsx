import React from "react";
import Header from './Header'
import Paragraph from './Paragraph'
import Square from './Square'
import People from './People'


const Stuff = () => (
    <>
      <Header text= "Hey World"></Header>
      <Paragraph message= "La la la la "/>
      <Square colour= "green" />
      <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
                   {/*^ mustach becaus we need to enter JS land for JS types to be understood*/}
    </>
)
export default Stuff;