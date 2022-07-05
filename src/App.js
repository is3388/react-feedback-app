import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import Stats from './components/Stats'
import FeedbackForm from './components/FeedbackForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () =>
{
   return (
    <FeedbackProvider>
        <Router>
            <Header bgColor='black' textColor='#ff6a95' />
            <React.StrictMode>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<><FeedbackForm />
                                            <Stats />
                                            <FeedbackList />
                                            
                                        </>} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
            </React.StrictMode>
        </Router>
    </FeedbackProvider>
        
    )
}

export default App