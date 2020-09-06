import React, { useState } from "react";


const ListH = () => {

    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.currentTarget.value);
        
    }
    //^controled component
    
    const [list, setList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, input])
        setInput("");
    }
    //^the array data structure, updated on subbmit




    return( 
        <>
            <button 
                onClick= { handleSubmit } 
                type="button" 
                className="btn btn-secondary mb-3">
                Add
            </button>
            <input
                type= "text"
                onChange= { handleChange }
                className= "form-control mb-3"
                value= { input }
                placeholder= "add to the List" 
            />
            
            <ul className= "list-group">
                { list.map((input, i) => (
                    <li 
                        className="list-group-item" 
                        key={ i }>
                        { input }
                    </li>
                ))}
            </ul>
        </>
    )
}


export default ListH ;