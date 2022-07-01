import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import Stats from './components/Stats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

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
        <FeedbackProvider>
        <Router>
        <Header bgColor='black' textColor='#ff6a95' />
        <React.StrictMode>
        <div className='container'>
            <Routes>
                <Route path='/' element={<><FeedbackForm handleAdd={addFeedback} />
                                            <Stats />
                                            <FeedbackList handleDelete={deleteFeedback} />
                                            <AboutIconLink />
                                        </>} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </div>
        </React.StrictMode>
        </Router>
        </FeedbackProvider>
        
    )
}

export default App