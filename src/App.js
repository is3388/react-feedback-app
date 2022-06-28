import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

const App = () =>
{
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
        <>
        <Header bgColor='black' textColor='#ff6a95' />
        <div className='container'>
            <FeedbackList feedback={feedback}/>
        </div>
        </>
        
    )
}

export default App