import { createContext, useState } from 'react'

const FeedbackContext = createContext()

// FeedbackProvider should be wrapped all components to get access to the state in App.js 
export const FeedbackProvider = ({ children }) =>
{
    // use useState instead of reducer
    const [feedback, setFeedback] = useState([{id: 1, text: 'This item is from context', rating: 10}])
    // value is what state we want to pass into components needed and shorthand for feedback:feedback 
    return (<FeedbackContext.Provider value={{feedback}}>
            {children}
        </FeedbackContext.Provider>)
}

export default FeedbackContext