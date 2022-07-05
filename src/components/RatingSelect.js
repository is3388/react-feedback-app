//import {useState, useContext, useEffect} from 'react'
//import FeedbackContext from '../context/FeedbackContext'

const RatingSelect = ({select, selected}) => {
    /* no need to have local state as it duplicates the parent state
     const [selected, setSelected] = useState(10) // the state which rating is selected
    no need to use context and useEffect
   const {feedbackEdit} = useContext(FeedbackContext)

   useEffect(() => {
        select(feedbackEdit.item.rating)

    }, [feedbackEdit])*/

    const handleChange = (e) => {
       //setSelected(+e.currentTarget.value) // currentTarget.value refers to what value selected (li stener attached to)and returns a string
        select(+e.currentTarget.value) //select is a function and pass in whatever value is selected. back up to set rating in form
    }

    return (
        <ul className='rating'>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onChange={handleChange}
                checked={selected === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
      )
}

export default RatingSelect