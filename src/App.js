import Header from './components/Header'
import ThreatReport from './components/ThreatReport'
import SearchBar from './components/SearchBar'
import { useState } from 'react'

function App() {
	// Testing data for ThreatReport and Report .js

	// Store boolean variables and function to toggle it
	const [Page, switchingPage] = useState(true)
	const [Hash, newHash] = useState('')

	//Function to toggle boolean variable Page
	function switchpage() {
		switchingPage(!Page)
	}

	// Function to get text from search bar
	function getQuery(text) {
		console.log('From App.js, hash keyed : ' + text)
		newHash(text)
	}

	function SearchPage(props) {
		return (
			<>
				<Header switchpage={props.switchpage} text={props.text} />
				<SearchBar getQuery={props.getQuery} />
				<ThreatReport HashData={props.HashData} />
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
			{Page && (
				<SearchPage
					getQuery={getQuery}
					switchpage={switchpage}
					text="Upload Threat Report"
					HashData={Hash}
				/>
			)}
			{!Page && (
				<UploadThreatPage
					switchpage={switchpage}
					text="Search Malicious Hashes"
				/>
			)}
		</div>
	)
}

export default App
