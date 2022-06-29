import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Stats from './components/Stats'

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
        <div className='container'>
            <Stats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
        </>
        
    )
}

export default App