import style from './Benefits.module.css'
import ylbox from '../../../assets/images/yellow_box.png'
import blbox from '../../../assets/images/blue_box.png'
import pinbox from '../../../assets/images/pink_box.png'
import grebox from '../../../assets/images/green_box.png'

import network from '../../../assets/images/network.png'
import global from '../../../assets/images/global.png'
import match from '../../../assets/images/match.png'
import collaborate from '../../../assets/images/collaborate.png'




function Benefits() {
  return (
    <>
    <div className={style.main}>
        <div className={style.heading}>
            <p>Benefits</p>
        </div>

        <div className={style.boxes}>

          {/* Card 1 */}
          <div className={style.cards}>
            <div className={style.left}>
              <div className={style.icon}>
                <img src={network} alt="" />
                <p>NETWORK</p>               
              </div>
              <p className={style.para}>
              Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.
              </p>

            </div>

            <div className={style.right}>
              <img src={ylbox} alt="" />
            </div>
          </div>

        {/* Card 2 */}
        <div className={style.cards}>
            <div className={style.left}>
              <div className={style.icon}>
                <img src={global} alt="" />
                <p>GLOBAL</p>               
              </div>
              <p className={style.para}>
              Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.
              </p>

            </div>

            <div className={style.right}>
              <img src={blbox} alt="" />
            </div>
          </div>


          {/* Card 3 */}
          <div className={style.cards}>
            <div className={style.left}>
              <div className={style.icon}>
                <img src={collaborate} alt="" />
                <p>COLLABORATE</p>               
              </div>
              <p className={style.para}>
              Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.
              </p>

            </div>

            <div className={style.right}>
              <img src={grebox} alt="" />
            </div>
          </div>

          
          {/* Card 4 */}
          <div className={style.cards}>
            <div className={style.left}>
              <div className={style.icon}>
                <img src={match} alt="" />
                <p>MATCH SKILL</p>               
              </div>
              <p className={style.para}>
              Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.
              </p>

            </div>

            <div className={style.right}>
              <img src={pinbox} alt="" />
            </div>
          </div>
          






        </div>

    </div>
    </>
  )
}

export default Benefits