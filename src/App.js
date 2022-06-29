import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Stats from './components/Stats'
import FeedbackForm from './components/FeedbackForm'

const App = () =>
{
    const deleteFeedback = (id) =>
    {
        if (window.confirm('are you sure you want to delete?'))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
        <Header bgColor='black' textColor='#ff6a95' />
        <React.StrictMode>
        <div className='container'>
            <FeedbackForm />
            <Stats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </React.StrictMode>
        </>
        
    )
}

export default App