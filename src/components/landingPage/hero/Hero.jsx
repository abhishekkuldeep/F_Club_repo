import style from './Hero.module.css'
import logo from '../../../assets/images/icon.png'
import img from '../../../assets/images/hero.png'
import blueicon from '../../../assets/images/blue_icon.png'

function Hero() {
  return (
    <>
    <div className={style.main}>
      <div className={style.navBar}>
        <div className={style.logo}>
          <img src={logo} alt="" />

        </div>
        <div className={style.button}>
          <button>Contact Us</button> 

        </div>

      </div>
      <div className={style.body}>
        <div className={style.left}>
          <div className={style.welcome}>
            <img src={blueicon} alt="" />
            <p>WELCOME TO FOUNDERS CLUB</p>
          </div>

          <div className={style.heading}>
            <p>Where Startups Meet Talent</p>
          </div>

          <div className={style.download}>
            <button>Download Now</button>
          </div>

          <div className={style.line}>
          </div>

          <div className={style.para}>
            <p>Foundersclub is your gateway to connect, innovate, and thrive. Join a global community of startups and professionals driving the future of business and technology.</p>

          </div>

        </div>
        <div className={style.right}>
          <img src={img} alt="" />

        </div>

      </div>
    </div>
    </>

  )
}

export default Hero