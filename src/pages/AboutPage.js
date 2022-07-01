import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
const AboutPage = () =>  
{
    return (
        <Card>
        <div className='about'>
            <h2>About This Project</h2>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>version 1.0.0</p>
            <p><Link to='/'>Back to Home</Link></p>
        </div>
        </Card>
    )
}

export default AboutPage