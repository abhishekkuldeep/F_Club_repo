import style from './Faqs.module.css'
import { useState } from 'react'
import arrow from '../../../assets/images/arrow.png'

function Faqs() {
    
    const [listA, setListA] = useState(false);
    const [listB, setListB] = useState(false);
    const [listC, setListC] = useState(false);


  return (
    <>
    <div className={style.main}>
        <div className={style.heading}>
            <p>Frequently asked Questions</p>

        </div>

        <div className={style.lists}>
            <div className={style.points}>
                <div className={style.header}>
                    <div onClick={() => (setListA(!listA))} className={style.headline}>
                        <h1>Is Founders club free to use?</h1>
                        <img style={{transform: `rotate(${listA ? 90:0}deg)`}} src={arrow} alt="" />
                    </div>

                    {
                        !listA &&
                        <div className={style.line}></div>
                    }

                </div>

                {
                   listA && 
                   <p>Yes, Foundersclub offers free access to its features, including creating profiles, joining clubs, and participating in discussions.</p> 
                }

            </div>

            <div className={style.points}>
                <div className={style.header}>
                    <div onClick={() => (setListB(!listB))} className={style.headline}>
                        <h1>Who can join Foundersclub?</h1>
                        <img style={{transform: `rotate(${listB ? 90:0}deg)`}} src={arrow} alt="" />
                    </div>

                    {
                        !listB &&
                        <div className={style.line}></div>
                    }

                </div>

                {
                   listB && 
                   <p>Yes, Foundersclub offers free access to its features, including creating profiles, joining clubs, and participating in discussions.</p> 
                }

            </div>

            <div className={style.points}>
                <div className={style.header}>
                    <div onClick={() => (setListC(!listC))} className={style.headline}>
                        <h1>Can I post job openings for my startup?</h1>
                        <img style={{transform: `rotate(${listC ? 90:0}deg)`}} src={arrow} alt="" />
                    </div>

                    {
                        !listC &&
                        <div className={style.line}></div>
                    }

                </div>

                {
                   listC && 
                   <p>Yes, Foundersclub offers free access to its features, including creating profiles, joining clubs, and participating in discussions.</p> 
                }

            </div>

        </div>

    </div>
    </>
  )
}

export default Faqs