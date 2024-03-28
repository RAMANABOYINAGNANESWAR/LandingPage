import './marquee.css';
import abhinav from './images/abhinav.png';
import airtel from './images/airtel.png';
import british from './images/british.png';
import colgate from './images/cologate.png';
import aspire from './images/aspire.png';
import delhimetro from './images/delhimetro.png';
import dpworld from './images/dpworld.png';
import edusky from './images/edusky.png';
import foundation from './images/foundation.png';
import g2market from './images/g2market.png';
// import jcb from './jcb.png';
// import john from './john.png';
// import mindways from './midways.png';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data=[
    {
        img:abhinav,
    },
    {
        img:airtel,
    },
    {
        img:british, 
    },
    {
        img:colgate,
    },
    {
        img:aspire,
    },
    {
        img:delhimetro,
    },
    {
        img:dpworld,
    },
    {
        img:edusky,
    },
    {
        img:foundation,
    },
    {
        img:g2market,
    },
];

const Marquee=() => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 0.1,
        cssEase: "linear"
      };
    return(
        
        <div className="marquee-main">
            <div className="marquee-main1">
            <Slider {...settings}>
                {data.map ((d) =>{
                    return(
                 <div className="marquee">

                    <div className='marquee-img'>
                        <img src={d.img} alt=""  />
                    </div>
                 </div>    );           
                })}
            </Slider>
            </div>
        </div>
        
    );
}



export default Marquee;