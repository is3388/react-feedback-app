import React, {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => 
{
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext) // bring in the other state to populate the text, rating and id on the form

    // use useEffect to re-render the form when the state of feedbackEdit changes
    useEffect(() =>
    {
        if ( feedbackEdit.edit === true )
        {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    // destructuring event to target and then further destructuring target to value
    const handleTextChange = ({target: {value}}) =>
    {
        if(value === '')
        {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(value.trim().length < 10)
        {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }
        else
        {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10 )
        {
            const newFeedback = {
                text,
                rating
            }

            if (feedbackEdit.item.edit === true)
            {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else
            {
            addFeedback(newFeedback)
            }
            // reset everything to default
            setBtnDisabled(true)
            setRating(10)
            setText('')
        }
        
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input type='text' 
                           placeholder='Write a review' 
                           value={text} 
                           onChange= {handleTextChange} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm