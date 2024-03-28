import './client.css';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from './images/test1.PNG';
import test2 from './images/test2.PNG';
import test3 from './images/test3.PNG';
import test4 from './images/test4.png';
import test5 from './images/test5.png';
import test6 from './images/test6.png';


const data=[
    {
        img:test1,
        title:'Navigating Chat History on SimplyEnglish kept my learning organized and proved crucial for my important presentation preparation. Thanks to the app, I delivered with confidence and received positive feedback.',
        
    },
    {
        img:test2,
        title:'SimplyEnglish played a key role in my professional growth. The refined communication skills and insightful Guided Learning Prompts helped me secure a promotion. Grateful for the apps impact on my career lines of Code to Lines of Communication.',   
    },
    {
        img:test3,
        title:'Ask Anything is my favorite feature on SimplyEnglish. It clarified my doubts during exam preparation, and the confidence gained through the apps unique features helped me clear my exam with flying colors.', 
    },
    {
        img:test4,
        title:'SimplyEnglishs interactive learning was a game-changer for my business dealings. Personalized lessons and instant feedback through Voice-Enabled Learning significantly contributed to cracking a major business deal.',
    },
    {
        img:test5,
        title:'As a content creator, SimplyEnglish was my go-to app for writing interactive website content. The fine-tuned language  skills, courtesy of the apps features, made my content more engaging and impactful.',
    },
    {
        img:test6,
        title:'SimplyEnglish significantly impacted my exam preparation. The seamless Voice-Enabled Learning made practicing skills easy, and thanks to the app, I cleared my exam with confidence. Highly recommended!.',
    },
];

const Clientstudy=() => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true, 
        autoplaySpeed: 3000,

      };
    return(
        <div className="client-container">
            <h1>What our clients say</h1>
        <div className="main-client-container">
            <div className="main-client-container1">
            <Slider {...settings}>
                {data.map ((d) =>{
                    return(
                 <div className="clientstudy">

                    <div className='clientstudy-img'>
                        <img src={d.img} alt=""  />
                       
                    </div>
                    <p>{d.title} </p>
                    {/* <div className='clientstudy-p'>
                        <p>{d.title} </p>
                    </div> */}

                 </div>   );           
                })}
            </Slider>
            </div>
        </div>
        </div>
    );
}
export default Clientstudy;