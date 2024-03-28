import './casestudy.css';
import craft from './images/craft.PNG';
import communication from './images/communication.PNG';
import speak from './images/speak.PNG';
import powerful from './images/powerful.jpeg';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const data=[
    {
        img:craft,
        title:'Craft A+ Essays: Elevate your grades with Simply English writing',
        
    },
    {
        img:communication,
        title:'Lines of Code to Lines of Communication: Simply English Unleashes Your Potentia',   
    },
    {
        img:speak,
        title:'Speak with Heart: Simply English—Moms, speaking the language of their children with ease', 
    },
    {
        img:powerful,
        title:'Powerful Vision, Persuasive Words: Simply English for Business Leaders.',
    },
];

const Casestudy=() => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000
      };
    return(
        <div className="case-container">
            <h1>Case Study  </h1>
        <div className="main-container">
            <div className="main-container1">
            <Slider {...settings}>
                {data.map ((d) =>{
                    return(
                 <div className="casestudy">

                    <div className='casestudy-img'>
                        <img src={d.img} alt=""  />
                    </div>

                    <div className='casestudy-p'>
                        <p>{d.title} </p>
                    </div>

                 </div>    );           
                })}
            </Slider>
            </div>
        </div>
        </div>
    );
}
export default Casestudy;