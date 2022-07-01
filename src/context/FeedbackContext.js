import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// FeedbackProvider should be wrapped all components to get access to the state in App.js 
export const FeedbackProvider = ({ children }) =>
{
    // use useState instead of reducer
    const [feedback, setFeedback] = useState([
        {id: 1, text: 'This is feedback item 1', rating: 10},
        {id: 2, text: 'This is feedback item 2', rating: 8},
        {id: 3, text: 'This is feedback item 3', rating: 7}
    ])
    // value is what state we want to pass into components needed and shorthand for feedback:feedback 
    
    const deleteFeedback = async (id) =>
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
    
    return (<FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback}}>
            {children}
        </FeedbackContext.Provider>)
}

export default FeedbackContext