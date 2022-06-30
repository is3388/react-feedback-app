import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Stats from './components/Stats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'

const App = () =>
{
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) =>
    {
        if (window.confirm('are you sure you want to delete?'))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) =>
    {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        //setFeedback((prev) => prev.concat(newFeedback))
    }

    
    return (
        <>
        <Header bgColor='black' textColor='#ff6a95' />
        <React.StrictMode>
        <div className='container'>
            <FeedbackForm handleAdd={addFeedback} />
            <Stats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </React.StrictMode>
        </>
        
    )
}

export default App