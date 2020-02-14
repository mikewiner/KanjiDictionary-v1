import React from 'react';
import Card from './Card';

const CardList = ({ kanjiList }) => {
	return(		
		<div>
			{
				kanjiList.map((aKanji, i) => { 
					return (
						<Card 
						key={i} 
						character={kanjiList[i].character}
						kunyomi= {kanjiList[i].kunyomi}
						onyomi={kanjiList[i].onyomi}
						meaning={kanjiList[i].meaning}
						jlpt={kanjiList[i].category}
						/>
					);
				})
			}
		</div>

	);
}

export default CardList;

// {cardComponent}
// return <Card character={kanji[i].character} reading={kanji[i].kunyomi+" "+kanji[i].onyomi} meaning={kanji[i].meaning} />