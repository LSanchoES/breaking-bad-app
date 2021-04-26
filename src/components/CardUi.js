import React from "react";
import { Card } from "react-bootstrap";

export const CardUi = (data) => {

	return (
		<>
			<Card className="bg-dark text-white carta animate__animated animate__fadeIn">
				<Card.Img src={data.data.img} alt={data.data.name} className="imagen" />
				<Card.ImgOverlay className="overlay">
					<Card.Title>{data.data.name}</Card.Title>
          <hr/>   
					<Card.Text>
						<b> Nickname: </b>
						{data.data.nickname}
					</Card.Text>
					<Card.Text>
						<b> Occupation: </b>
						{data.data.occupation}
					</Card.Text>
					<Card.Text>
						<b> Portrayed: </b>
						{data.data.portrayed}
					</Card.Text>
					<b> Status: </b>
					{data.data.status}
				</Card.ImgOverlay>
			</Card>
		</>
	);
};
