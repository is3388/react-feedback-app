import spinner from '../assets/spinner.gif'

const Spinner = () => {
    const spinnerStyle = {
        width: '100px',
        margin: 'auto',
        display: 'block'
    }
    return (
        <img src={spinner} alt='Loading ...' style={spinnerStyle} />
    )
}

export default Spinner