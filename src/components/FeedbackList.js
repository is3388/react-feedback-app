import FeedbackItem from "./FeedbackItem"
//import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
    // no longer use props to pass into component
    // use the global context and that particular state of the particular context
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0)
    {
        return <p>No feedback yet</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) =>
                (
                    <motion.div key={item.id} 
                                initial={{opacity:0}}
                                animate={{opacity: 1}}
                                exit={{opacity:0}}>
                               
                    <FeedbackItem key={item.id} item={item} />
                    </motion.div>)
            )}
            </AnimatePresence>
        </div>
    )
}

/* FeedbackList.propTypes = { feedback: PropTypes.arrayOf (
    PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    })
) 
}*/
export default FeedbackList