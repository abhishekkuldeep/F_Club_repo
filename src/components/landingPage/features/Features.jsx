import style from './Features.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Features.module.css'

function Features() {
  const data = [
    {
      title: `Global Networking`,
      img: `./src/assets/images/global.jpeg`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
    },
    {
      title: `Seamless Applications`,
      img: `./src/assets/images/seamless.jpeg`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
    },
    {
      title: `Industry Highlights`,
      img: `./src/assets/images/industry.jpeg`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
    },
    {
      title: `Startup Showcase`,
      img: `./src/assets/images/startup.jpeg`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
    },
    {
      title: `Global Networking`,
      img: `./src/assets/images/globalCard.png`,
      para: `Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.`,
    }  
  ]

  const settings = {
    dots: false,
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
        
          <div key={d.title} className={style.cards}>
            <div className={style.left}>
              <h1 className={style.title}>{d.title}</h1>
              <p className={style.para}>{d.para}</p>

            </div>

            <div className={style.right}>
              <img src={d.img} alt="" />
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