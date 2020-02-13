import React from 'react';

const SearchBox = ({searchChange}) => {

	return (
		<div className="pa3">
			<input 
			className="bg-light-yellow pa3 ba b--green "
			size="35"
			type="search" 
			placeholder="Kanji, reading or keyword"
			onChange= {searchChange}
			/>
		</div>
	);

}

export default SearchBox;