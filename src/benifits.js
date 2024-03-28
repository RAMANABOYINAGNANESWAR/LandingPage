import './benefits.css';
import benefits1 from './images/benefit1.PNG';
import benefits2 from './images/benefit2.PNG';
import benefits3 from './images/benefit3.PNG';



const data=[
    {
      imgurl:benefits1,
      title:'24x7 English Tutorial',
    },
    {
      imgurl:benefits2,
      title:'Ask Questions Any Time',
    },
    {
        imgurl:benefits3,
        title:'Progress Tracking',
    },
];



const Benefits =()=>{
    return(
        <>
        <div className="benefits">
            <h1>Key Benefits</h1>
            <section className='key-benefits' >
                {data.map((eachObj,index) => {
                const {imgurl,title}=eachObj;
                return (
                    <Components             
                    imgurl={imgurl}
                    title={title}
                    />  
                  );      
                  })}
            </section>
        </div>
      
    </>
    );
}


const Components =(props)=>{
    const {imgurl,title}= props;
    return(
        
        <article className="container" >
            <div >
            <img src={imgurl} alt="benefits" className='bene-img' />
            <h4>{title} </h4>
            </div>
        </article> 
        
        
    );
}
export default Benefits;







