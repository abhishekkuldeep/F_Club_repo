import style from './Features.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Features.module.css'
import '../../../index.css'

import globalimg from '../../../assets/images/globalimg.png'
import seamless from '../../../assets/images/seamless.png'
import industry from '../../../assets/images/industry.png'
import startup from '../../../assets/images/startup.png'
import globalCard from '../../../assets/images/globalCard.png'

import green_icon from '../../../assets/images/green_icon.png'
import yellow_icon from '../../../assets/images/yellow_icon.png'
import red_icon from '../../../assets/images/red_icon.png'
import dblue_icon from '../../../assets/images/dblue_icon.png'


function Features() {
  const data = [
    {
      title: `Global Networking`,
      img: globalimg,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: green_icon
    },
    {
      title: `Seamless Applications`,
      img: seamless,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: yellow_icon
    },
    {
      title: `Industry Highlights`,
      img: industry,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: red_icon
    },
    {
      title: `Startup Showcase`,
      img: startup,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: dblue_icon
    },
    {
      title: `Global Networking`,
      img: globalCard,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: green_icon
    }  
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <div className={style.main}>
        <div className={style.heading}>
            <p>Features</p>

        </div>

        <Slider {...settings}>

        { data.map( (d)=>(
        
          <div key={d.title}>
            <div className={style.body}>
              <div className={style.left}>
                <h1 className={style.title}>{d.title}</h1>
                <p className={style.para}>{d.para}</p>
                
                <div className={style.barBox}>
                  <div className={style.bars}>
                    <img src={d.icon} alt="" />
                    <p>Welcome to Founders Club</p>

                  </div>
                  <div className={style.bars}>
                    <img src={d.icon} alt="" />
                    <p>Welcome to Founders Club</p>

                  </div>
                  <div className={style.bars}>
                    <img src={d.icon} alt="" />
                    <p>Welcome to Founders Club</p>

                  </div>
                </div>


                

              </div>

              <div className={style.right}>
                <img src={d.img} alt="" />
              </div>

            </div>

          </div>

        ) )

        }
        </Slider>


    </div>
    </>
  )
}

export default Features