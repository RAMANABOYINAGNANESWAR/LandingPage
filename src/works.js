import './works.css';
import ask from './images/ask1.PNG';
import signup from './images/signup1.PNG';
import learn from './images/learn1.PNG';
import prompt from './images/prompt1.png';
import review from './images/review1.PNG';
import works from './images/howitsworks.png';

const Work =()=>{
    return(
     
        <>
        <h1 className='head'>How It Works</h1>
        <div className="work-container">
            <div class="works">
            
                <ul>
                    <li><img src={signup} alt="" className="work-img" width="69px" /> Sign Up </li>
                    <li><img src={learn} alt="" className="work-img" width="69px" />Choose what you would like to learn</li>
                    <li><img src={prompt} alt="" className="work-img" width="69px" />Leverage the guided prompts</li>
                    <li><img src={ask} alt="" className="work-img" width="69px" />Type your own prompts to ask anything</li>
                    <li><img src={review} alt="" className="work-img" width="69px" />Review chat history</li>
                </ul>
                <div className="text-c">
                    <img src="images/watchvideo.png" alt="" className="work-img" width="75%" />
                </div>
            </div>
            <div className="how-it-works">
                <img src={works} alt="" />
            </div>
        </div>
        </>
    );
}


export default Work;