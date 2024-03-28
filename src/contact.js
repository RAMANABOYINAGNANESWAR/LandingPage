import './contact.css';
import contactus from './images/contactus.jpeg';
import gpay from './images/gogleplay.png';
import qr from './images/qr.png';

const Contact =()=>{
    return(
        <>
        <div className="contact-container">
            <div className="contact-conatiner1">
                <img src={contactus} alt="" className='contactus'/>
            </div>
            <div className="contact-container2">
                <div className="title">
                    <h3>Keep In Touch</h3>
                </div>
                <div className="email">
                    <b>Email</b>
                    <p>info@simplyenglish.ai</p>
                </div>
                <div className="phone">
                    <b>Phone Number</b>
                    <p>India : 9599060043</p>
                </div>
                <div className="apps">
                    <div >
                        <img src={gpay} alt="" className="gpay" />
                    </div>
                    <div >
                        <img src={qr} alt="" className="scanner"/>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <p>Copyright@2008-23 Eagetutor.com All rights reserved | Powered by EAGE EDUSOLUTIONS PVT LTD</p>
        </footer>
        </>
    );

}

export default Contact;
