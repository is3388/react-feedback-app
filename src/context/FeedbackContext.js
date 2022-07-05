import { createContext, useState, useEffect } from 'react'
//import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// FeedbackProvider should be wrapped all components to get access to the state in App.js 
export const FeedbackProvider = ({ children }) =>
{
    // use useState instead of reducer
    const [feedback, setFeedback] = useState([]) // delete hard coded array of feedback
    // another state to track which item is clicked for edit
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, // text and rating
        edit: false
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // value is what state we want to pass into components needed and shorthand for feedback:feedback 
    
    const deleteFeedback = async (id) =>
    {
        if (window.confirm('are you sure you want to delete?'))
        {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item) => item.id !== id))
            setIsLoading(false)
        }
    }

    const addFeedback = async (newFeedback) =>
    {
        // no need to use uuid as we use json-server newFeedback.id = uuidv4()
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
        //setFeedback((prev) => prev.concat(newFeedback))
    }

// when the feedback item is selected for edit, set the text, rating and id to prepopulate the form
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

// update feedback item on the form
    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        const data = await response.json()
        //setFeedback(feedback.map((item) => (item.id === id ?{...item, ...updatedItem} : item)))
        setFeedback(feedback.map((item) => (item.id === id ? data : item)))
        setFeedbackEdit({
            item: {},
            edit: false,
          })
    }
    
    return (<FeedbackContext.Provider value={{feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback, isLoading}}>
            {children}
        </FeedbackContext.Provider>)
}

export default FeedbackContext