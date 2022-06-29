import PropTypes from 'prop-types'

const Stats = ({feedback}) => {
    let avg = Math.round(feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length)
       
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
        </div>
      )
}

Stats.propTypes = { feedback: PropTypes.array.isRequired}

export default Stats