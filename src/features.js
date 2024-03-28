import './features.css';
import guidedpromt from './images/Guideprompts.png';
import bg from './images/bg.jpeg';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Casestudy=() => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true, 
        autoplaySpeed: 4000
      };
    return(
        <div className="feature-container">
            <h1>App Features</h1>
        <div className="main-container">
            <div className="main-container1">
            <Slider {...settings}>
               <div className="img1">
                    <img src={guidedpromt} alt=""  className='fea-img'/>
               </div>
               <div className="text1">
                    <img src={bg} alt="" className='bg'  />
                    <h2>Guided Learning Prompts</h2>
                    <p>Let our Guided Learning Prompts be your personalized language coach. Tailored to your proficiency, these prompts not only refine your English skills but also provide structured lessons, making learning on SimplyEnglish a breeze.</p>
                    
               </div>
               <div className="img1">
                    <img src={guidedpromt} alt=""  className='fea-img'/>
               </div>
               <div className="text1">
                    <img src={bg} alt="" className='bg'  />
                    <h2>Voice Recognization</h2>
                    <p>Speak your questions into our SimplyEnglish app and receive instant answers! Our Voice Recognition feature not only enhances your spoken English but also allows you to effortlessly inquire about anything, eliminating the need for typing</p>
               </div>
               <div className="img1">
                    <img src={guidedpromt} alt=""  className='fea-img' />
               </div>
               <div className="text1">
                    <img src={bg} alt="" className='bg'  />
                    <h2>Voice Enabled Learning</h2>
                    <p>Immerse yourself in interactive learning with Voice-Enabled Learning on SimplyEnglish. Speak, listen, and practice pronunciation effortlessly, taking your language skills to new heights with just your voice.</p>
               </div>
               <div className="img1">
                    <img src={guidedpromt} alt=""  className='fea-img' />
               </div>
               <div className="text1">
                    <img src={bg} alt="" className='bg'  />
                    <h2>Chat History</h2>
                    <p>No need to worry about forgetting lessons—SimplyEnglish's Chat History feature keeps track of your progress. Revisit and review your personalized chat log to stay organized and motivated throughout your English learning journey.</p>
               </div>
               <div className="img1">
                    <img src={guidedpromt} alt=""  className='fea-img' />
               </div>
               <div className="text1">
                    <img src={bg} alt="" className='bg'  />
                    <h2>Ask Anything</h2>
                    <p>With our "Ask Anything" feature, speaking is all you need to do. Simply use  your voice to inquire about language nuances, exam strategies, or any English-related queries, and receive instant and accurate responses on SimplyEnglish.</p>
               </div>
            </Slider>
            </div>
        </div>
        </div>
    );
}
export default Casestudy;
