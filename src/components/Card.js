import React from 'react';

const Card = ({character, reading, meaning}) => {
	return(
		<div className="bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<div>
				<h1>{character}</h1>
				<p>{reading}</p>
				<p>{meaning}</p>
			</div>
		</div>

	);
}

export default Card;

// <img alt="robots" src={`https://robohash.org/${character}?200x200`}/>