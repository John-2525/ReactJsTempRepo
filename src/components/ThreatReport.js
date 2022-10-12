import ReportDisplay from './ReportDisplay'
import { useState } from 'react'

// Recieves and (sorts?) data from MongoDB from express.js
const ThreatReport = (props) => {
	console.log('From ThreatReport.js, hash keyed : ' + props.HashData)

	// (Note to future self) Put the API node here and retrieve only
	// one set of data or get the whole list and filter ?

	// The below will be replaced by Express.js API/server and MongoDB

	const [alldatabaseData] = useState([
		{
			id: 1,
			name: 'Wannacry',
			hash: 'db349b97c37d22f5ea1d1841e3c89eb4',
			threatReport:
				'WannaCry is not polymorphic. The original file (mssecsvc/r.exe) does not change. It has a unique MD5 Hash of: db349b97c37d22f5ea1d1841e3c89eb4. This file is spread to every newly-infected computer, which then attempts to spread to others',
		},
	])

	const filteredData = alldatabaseData.filter(
		(Data) => Data.hash === props.HashData
	)

	return (
		<>
			{alldatabaseData
				.filter((Data) => Data.hash === props.HashData)
				.map((filteredData) => (
					<ReportDisplay
						key={filteredData.id}
						report={filteredData}
					/>
				))}
		</>
	)
}

export default ThreatReport
