import style from './LandingPage.module.css'
import Hero from './hero/Hero'
import Features from './features/Features'
import Benefits from './benefits/Benefits'
import Csection from './c_section/Csection'
import Faqs from './faqs/Faqs'
import Footer from './footer/Footer'

function LandingPage() {
  return (
    <>
    <div className={style.main}>
        <Hero/>
        {/* <Features/> */}
        <Benefits/>
        <Csection/>
        <Faqs/>
        <Footer/>

    </div>
    </>
    
  )
}

export default LandingPage