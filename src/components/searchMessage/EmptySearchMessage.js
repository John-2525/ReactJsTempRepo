import React from 'react'

const EmptySearchMessage = () => {
	return (
		<>
			<h3>
				No matching hashes in the database was found
				{/* <AiFillCheckCircle
						style={{
							color: 'green',
							height: '1.75em',
							width: '1.75em',
						}}
					/> */}
			</h3>
		</>
	)
}

export default EmptySearchMessage
