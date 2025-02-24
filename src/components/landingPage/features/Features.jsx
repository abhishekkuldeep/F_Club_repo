import style from './Features.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Features.module.css'
import '../../../index.css'

function Features() {
  const data = [
    {
      title: `Global Networking`,
      img: `./src/assets/images/globalimg.png`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: `./src/assets/images/green_icon.png`
    },
    {
      title: `Seamless Applications`,
      img: `./src/assets/images/seamless.png`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: `./src/assets/images/yellow_icon.png`
    },
    {
      title: `Industry Highlights`,
      img: `./src/assets/images/industry.png`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: `./src/assets/images/red_icon.png`
    },
    {
      title: `Startup Showcase`,
      img: `./src/assets/images/startup.png`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: `./src/assets/images/dblue_icon.png`
    },
    {
      title: `Global Networking`,
      img: `./src/assets/images/globalCard.png`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
      icon: `./src/assets/images/green_icon.png`
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