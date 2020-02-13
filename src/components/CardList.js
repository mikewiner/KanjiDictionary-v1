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
						reading={kanjiList[i].kunyomi+" "+kanjiList[i].onyomi}
						meaning={kanjiList[i].meaning}
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