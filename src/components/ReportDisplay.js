import { React, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'

const ReportDisplay = (props) => {
	const reportResult = props.report.id

	console.log('From ReportDisplay.js, id : ' + reportResult)
	const [displayDefaultMessage, displayNewMessage] = useState(true)

	function DisplayResponse(props) {
		if (!displayDefaultMessage) {
			if (props.reportResult > 0) {
				return <ValidResult reportData {...props} />
			} else {
				return <NoResult />
			}
		}
		return <DefaultDisplay />
	}

	function ValidResult(reportData) {
		return (
			<>
				<h3>
					A match with the hash ({reportData.report.hash}) was found
					within within the database
					<FaTimes
						style={{
							color: 'red',
							height: '1.75em',
							width: '1.75em',
						}}
					/>
				</h3>
				<h3>The hash orignated from {reportData.report.name}</h3>
				<h3>Report :</h3>
				<p>{reportData.report.threatReport}</p>
			</>
		)
	}

	function NoResult() {
		return (
			<>
				<h3>
					No matching hashes in the database was found
					<AiFillCheckCircle
						style={{
							color: 'green',
							height: '1.75em',
							width: '1.75em',
						}}
					/>
				</h3>
			</>
		)
	}

	function DefaultDisplay() {
		return (
			<>
				<h3>
					Search for malicious file hash by uploading file or
					inputting file hash
				</h3>
			</>
		)
	}

	return (
		<div className="report">
			<DisplayResponse
				reportResult={reportResult}
				props
				{...props}
				displayDefaultMessage={displayDefaultMessage}
			/>
		</div>
	)
}

export default ReportDisplay
