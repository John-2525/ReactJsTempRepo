import { React, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'
import DefaultSearchMessage from './searchMessage/DefaultSearchMessage'
import EmptySearchMessage from './searchMessage/EmptySearchMessage'

// Test this .js's logic once ThreatReport.js is solved

const ReportDisplay = (props) => {
	const reportId = props.report.id
	const reportHash = props.report.hash
	const reportName = props.report.name
	const reportThreatReport = props.report.threatReport
	const hashLength = props.hashLength
	console.log('From ReportDisplay.js, prop data : ' + props.report)
	console.log('From ReportDisplay.js, id : ' + reportId)

	function DisplayResponse() {
		if (hashLength > 0) {
			if (reportId > 0) {
				return <ValidResult />
			} else {
				return <EmptySearchMessage />
			}
		}
		return <DefaultSearchMessage />
	}

	function ValidResult(props) {
		return (
			<>
				<h3>
					A match with the hash ({reportHash}) was found within within
					the database
					{/* <FaTimes
						style={{
							color: 'red',
							height: '1.75em',
							width: '1.75em',
						}}
					/> */}
				</h3>
				<h3>The hash orignated from {reportName}</h3>
				<h3>Report :</h3>
				<p>{reportThreatReport}</p>
			</>
		)
	}

	return (
		<div className="report">
			<DisplayResponse />
		</div>
	)
}

export default ReportDisplay
