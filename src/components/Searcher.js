import React from 'react'
import { Form } from 'react-bootstrap'


export const Searcher = (props) => {

    let {inputValue} = props.inputValue
    let {setInputValue} = props.setInputValue
    const handleInputChange = (e) => {
		
        setInputValue(e.target.value.toLowerCase())

    }
    
    const handleDeleteState = () =>{
        if( inputValue === " "){
            setInputValue('')
        }
    }
    
    return (
        <div>
            
            <Form.Group className="formulario">
            <Form.Label className=" justify-content-center text-center lab">Look for a character</Form.Label>
            <Form.Control
            onClick={handleDeleteState}
            onChange={handleInputChange}
            className="input" 
            size="lg" 
            type="text"     
            value= {inputValue}
            placeholder=' '
            />
            
            </Form.Group>
        </div>
    )
}
