import React from 'react';

const Card = ({character, kunyomi, onyomi, meaning, jlpt}) => {
	return(
		<div className="bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<div>
				<h1>{character}</h1>
				<p><b>訓：</b>{kunyomi}</p>
				<p><b>音：</b>{onyomi}</p>
				<p><b>意味：</b>{meaning}</p>
				<p>{jlpt}</p>
			</div>
		</div>

	);
}

export default Card;

// <img alt="robots" src={`https://robohash.org/${character}?200x200`}/>