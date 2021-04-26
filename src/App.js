import React, { useEffect, useState } from "react";
import {apiResp} from './api/apiResp'
import { CardContainer } from "./components/CardContainer";
import { Head } from "./components/Head";

const App = () => {

	//Petition

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const resp = await apiResp.get(
			"https://www.breakingbadapi.com/api/characters"
		);
		setCharacters(resp.data);
	};

	return (
		<>
		<div>	
		<Head />
		<CardContainer characters = {characters} />
		</div>
		</>
	);
};

export default App;
