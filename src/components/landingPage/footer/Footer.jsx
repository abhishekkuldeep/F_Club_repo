import style from './Footer.module.css'
import icon from '../../../assets/images/icon.png'
import x from '../../../assets/images/x.png'
import apple from '../../../assets/images/apple.png'
import play from '../../../assets/images/playStore.png'
import linkdin from '../../../assets/images/linkdin.png'


function Footer() {
  return (
    <>
    <div className={style.main}>
        <div className={style.left}>
            <img className={style.icon} src={icon} alt="" />
            <p className={style.heading}>FoundersClub</p>
            <p className={style.followUs}>Follow us on</p>

            <div className={style.btn}>
                <div className={style.social}>
                    <img src={x} alt="" />
                    <p>Twitter</p>
                </div>
                <div className={style.social}>
                    <img src={linkdin} alt="" />
                    <p>Linkdin</p>
                </div>
            </div>

        </div>

        <div className={style.right}>
            <div className={style.download}>
                <p>Download From</p>
                <img src={play} alt="" />
                <img className={style.apple} src={apple} alt="" />

            </div>
        </div>

    </div>
    </>
  )
}

export default Footer