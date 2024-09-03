import React, { useEffect } from "react";
import "./Front.css";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
function Front() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
  return (
  
      <div className="front front-container">
        <h4 className="h1-text" data-aos="zoom-in">🌺 || श्री गणेशाय नमः || 🌺</h4>

        <h2 className="h2-text" data-aos='zoom-in'>
          पाहून ते गोजिरवाणं रम्य रूप, मोह होई मनास खूप..<br></br> ठेविण्या तुझे
          हाती मोदक प्रसाद, होते सदैव दर्शनाची आस..<br></br> नाव घेऊनिया मोरयाचे
          मुखी, मन वाट पाहते फक्त तुझ्या आगमनाची.....!
        </h2>
        <Link to="/main">
          <button className="btn" data-aos='fade-down' >
            आमंत्रण <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
   
  );
}

export default Front;
