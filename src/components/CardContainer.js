import React, { useState } from "react";
import { Col, Container,Row } from "react-bootstrap";
import { CardUi } from "./CardUi";
import { Searcher } from "./Searcher";

export const CardContainer = ({characters}) => {

	//SELECTOR
	const [inputValue, setInputValue] = useState(" ")
    
	// DATA FILTERING - GET (log)

	// characters.length > 0 ?  console.log(characters) : console.log('loading') 
    // characters.length > 0 ?  characters.filter(
    //     (char) => char.name.includes(inputValue))
	// 	.map(filteredChar => console.log(filteredChar))
    // : console.log('loading') 
	return (
		<div className="mt-5">
			<Container>
				
				<Searcher 
					inputValue={{inputValue}}
					setInputValue={{setInputValue}}
				/>
				<Row>
					<Col>
					<span
					 className="no-cards animate__animated animate__fadeIn animate__delay-2s lab">
						 Sorry, There are no characters with this name  :(
					</span>
						{
						
						characters.length > 0
						?(
							
							characters.filter(
							(char) => char.name.toLowerCase().includes(inputValue) )
							.map(data => (
							<CardUi data={data} key={data.char_id} />
							))
							
						)
								
						:(
							
							<Col className="loader"></Col>
						
						)
						}
					</Col>
				</Row>
			</Container>
		</div>
	);
};
