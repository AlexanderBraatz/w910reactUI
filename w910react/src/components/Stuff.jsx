import React from "react";
import Header from './Header'
import Paragraph from './Paragraph'
import Square from './Square'
import People from './People'


const Stuff = () => (
    <>
      <Header>Hey anne und mama</Header>
      <Paragraph>La la la la</Paragraph>
      <Square colour= "green" square= { false } />
      <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
                   {/*^ mustach becaus we need to enter JS land for JS types to be understood*/}
    </>
)
export default Stuff;