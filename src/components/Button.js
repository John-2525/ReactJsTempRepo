import PropTypes from 'prop-types'

const Button = (props) => {
	return (
		<button
			className="btn"
			onClick={props.onClick}
			style={{ backgroundColor: props.color }}
		>
			{props.text}
		</button>
	)
}

Button.defaultProps = {
	color: 'steelblue',
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default Button
