import React from "react";
import { Card } from "react-bootstrap";

export const Head = () => {
	const imageUrl = "https://i.blogs.es/6d84c8/breaking-bad/1366_2000.jpg";
	return (
		<>
			{/* <img
				src={imageUrl}
				alt="BreakingBad"
				className="responsive"
				width="600"
				height="400"
			></img>
			<h1 className="titulo-principal"> APP</h1> */}

			<Card className=" responsive animate__animated animate__fadeIn">
				<Card.Img src={imageUrl} alt='Breaking Bad' className="" />
				<Card.ImgOverlay className="overlay">
					<Card.Title className="titulo-principal">App</Card.Title>
				</Card.ImgOverlay>
			</Card>
		</>
	);
};
