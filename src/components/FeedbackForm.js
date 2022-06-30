import React, {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => 
{
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)

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

    return (
        <Card>
            <form>
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