import { React, useState } from 'react'
import Button from './Button'

// Returns hashes keyed into the search bar to App.js
const SearchBar = (props) => {
	// To initialize and retrieve/update text in search bar
	const [searchInput, setSearchInput] = useState('')

	// Function to pass text to getQuery(String) in App.js and clear search bar
	function passSearchBarText() {
		props.getQuery(searchInput)
		setSearchInput('')
	}

	return (
		<div className="searchDiv">
			<input
				className="searchBar"
				type="text"
				placeholder="Key Hash ..."
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
			/>
			<Button
				color="grey"
				text="Search Hash"
				onClick={passSearchBarText}
			/>
		</div>
	)
}

export default SearchBar
