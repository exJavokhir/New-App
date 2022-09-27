import React from 'react'
import javohir from './footer.module.scss'
import Telegram from '../../assets/Icons/Vector (2).svg'
import Facebook from '../../assets/Icons/Vector.svg'
import Twitter from '../../assets/Icons/Vector (1).svg'

const Footer = () => {
  return (
    <div className={javohir.footer_wrapper}>
      <div className="container">
        <div className={javohir.links}>
            <div className={javohir.logo}><h1>Aladdin</h1></div>
            <div className={javohir.FAQ_links}>
                <ul>
                    <li><span>© 2022 Alladdin</span></li>
                    <li><span>Пользовательское соглашение</span></li>
                    <li><span>FAQ</span></li>
                    <li><span>Контакты</span></li>
                </ul>
            </div>
            <div className={javohir.social_links}>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://t.me/shokirov_dev"><img src={Telegram} alt="" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shokirov_dev/"><img src={Facebook} alt="" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/javohir-shokirov-8103a1209/"><img src={Twitter} alt="" /></a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
