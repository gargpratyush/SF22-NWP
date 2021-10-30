import './landingPage.css';
import text from './hitch-hike-txt.png';

const LandingPage = () => {
    return ( 
        <div className="landing-page">
            <img src={text} alt="Hitch Hike" className='hitch-hike-txt'/>
        </div>
     );
}
 
export default LandingPage;