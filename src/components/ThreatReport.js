import ReportDisplay from './ReportDisplay'

// Recieves and (sorts?) data from MongoDB from express.js
const ThreatReport = (props) => {
	const hashLength = props.hashLength
	console.log('From ThreatReport.js, hash keyed : ' + props.hashData)
	console.log('From ThreatReport.js, hash length : ' + props.hashLength)

	// (Note to future self) Put the API node here and retrieve only
	// one set of data or get the whole list and filter ?

	// The below will be replaced by Express.js API/server and MongoDB

	const alldatabaseData = [
		{
			id: 1,
			name: 'Wannacry',
			hash: 'db349b97c37d22f5ea1d1841e3c89eb4',
			threatReport:
				'WannaCry is not polymorphic. The original file (mssecsvc/r.exe) does not change. It has a unique MD5 Hash of: db349b97c37d22f5ea1d1841e3c89eb4. This file is spread to every newly-infected computer, which then attempts to spread to others',
		},
	]

	const filteredObjectArray = alldatabaseData.filter(
		(dBData) => dBData.hash === props.hashData
	)

	function PassingData() {
		if (filteredObjectArray.length === 0) {
			return (
				<ReportDisplay
					report={filteredObjectArray}
					hashLength={hashLength}
				/>
			)
		} else {
			return filteredObjectArray.map((data) => {
				return (
					<ReportDisplay
						key={data.id}
						report={data}
						hashLength={hashLength}
					/>
				)
			})
		}
	}

	// const conversion= filteredObjectArray.map() {

	// }

	return (
		<>
			<PassingData />
		</>
	)
}

export default ThreatReport
