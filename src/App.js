import Header from './components/Header'
import ThreatReport from './components/ThreatReport'
import SearchBar from './components/SearchBar'
import { useState } from 'react'

function App() {
	// Testing data for ThreatReport and Report .js

	// Store boolean variables and function to toggle it
	const [page, switchingPage] = useState(true)
	const [hash, newHash] = useState('')
	const [length, updateLength] = useState(0)

	//Function to toggle boolean variable Page
	function switchpage() {
		switchingPage(!page)
	}

	// Function to get text from search bar and text's length
	function getQuery(text) {
		newHash(text)
		updateLength(text.length)
	}

	function SearchPage(props) {
		return (
			<>
				<Header switchpage={props.switchpage} text={props.text} />
				<SearchBar getQuery={props.getQuery} />
				<ThreatReport
					hashData={props.hashData}
					hashLength={props.hashLength}
				/>
			</>
		)
	}

	function UploadThreatPage(props) {
		return (
			<>
				<Header switchpage={props.switchpage} text={props.text} />
			</>
		)
	}

	return (
		<div className="App">
			{page && (
				<SearchPage
					getQuery={getQuery}
					switchpage={switchpage}
					text="Upload Threat Report"
					hashData={hash}
					hashLength={length}
				/>
			)}
			{!page && (
				<UploadThreatPage
					switchpage={switchpage}
					text="Search Malicious Hashes"
				/>
			)}
		</div>
	)
}

export default App
