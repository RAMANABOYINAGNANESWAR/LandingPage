import './introduction.css';
import banner1 from './images/banner1.png';
import gpay from './images/googleplay.png';
import qr from './images/qr.png';
import banner from './images/banner.JPG';


const Introduction = ()=>{
    return(
        <>
        <div className="intro">
            <div className="intro1">
                <div className="intro-container1">
                    <img src={banner1} alt="banner1" />
                    <p className='heading'>Simply English AI</p>
                    <p className='para'>Your Gateway to Success</p>
                </div>
                <div className="intro-container2">
                    <h4>Unlock 1 Bilion Creams</h4>
                    <h4>With our AI Driven English Learning APP</h4>     
                    <nav className='list'>
                        <li>Elevate Your Language Skills for Interviews and Exams</li>
                        <li>Powered by Advanced AI Technology</li>
                        <li>Future of Education, Right at your Fingerprints</li>
                    </nav>
                    <div className='imges'>
                        <img src={gpay} alt="gpay"  className='gpay'/>
                        <img src={qr} alt="qr" className='qr' />
                    </div>
                    <div className="social">
                        <a href><i class="fa-brands fa-square-facebook"></i></a>
                        <a href><i class="fa-brands fa-instagram"></i></a>
                        <a href><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div className="intro2">
                <img src={banner} alt="banner" />
            </div>
        </div>
        </>
    );
}


export default Introduction;












