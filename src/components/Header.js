import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = (props) => {
	return (
		<header className="header">
			<h1>{props.title}</h1>
			<Button color="red" text={props.text} onClick={props.switchpage} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Malicious Hash Repo and Detector',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

// How to put CSS in JS
// .... style= {headingStyle}
// const headingStyle = {
//     color: 'blue', backgroundColor: 'salmon'
// }

export default Header
