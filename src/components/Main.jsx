import React , {useEffect}from 'react'
import './Main.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import mainImg from '../images/ganpati-img.png'
function Main() {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
  return (
    <div className='main main-container'>
      <img src={mainImg} alt='image' data-aos="zoom-in"></img>
      <h4 className='main-h4' data-aos='zoom-in'>🌺 || ॐ गं गणपतये नमो नमः || 🌺</h4>
      <h5 className='main-h5' data-aos='zoom-in'>आग्रहाचे निमंत्रण</h5>
      <h4 className='main-h4-2' data-aos='zoom-in'>आमच्या येथे गणेशचतुर्थी च्या पवित्र मुहूर्तावर, <br></br>शनिवार दिः ०७ सप्टेंबर २०२४ रोजी सहा दिवसांसाठी <br></br>🌺!! श्री गणपती बाप्पा!🌺<br></br> चे आगमन होणार आहे....<br></br> तरीहि आपण सहकुटुंब सहपरिवार उपस्थित राहून <br></br> दर्शन अन महाप्रसादाचा लाभ घ्यावा हि नम्रविनंती.</h4>
      <h6 className='main-h6' data-aos='zoom-in'>पत्ता : जी -१०, रूम नं- ०९, खरदेवनगर, घाटला, चेंबूर, मुंबई - ७१</h6>
    </div>
  )
}

export default Main
