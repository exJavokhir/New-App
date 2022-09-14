import React from 'react'
import javohir from './header.module.scss'
import { Link } from 'react-router-dom'
import Search from '../../assets/Icons/search.svg'
import User from '../../assets/Icons/user.png'

const Header = () => {
  return (
    <div className={javohir.header_wrapper}>
      <div className="container">
        <div className={javohir.inner}>
            <div className={javohir.header_logo}>
                <Link to={'/'} className={javohir.header_logo_link}>
                    Alladdin
                </Link>
            </div>
            <div className={javohir.header_links}>
                <ul>
                  <li><Link to={'/newmovies'} className={javohir.header_links_link}>Novinki</Link></li>
                  <li><Link to={'/catalog'} className={javohir.header_links_link}>Katalog</Link></li>
                  <li><Link to={'/collections'} className={javohir.header_links_link}>Podborki</Link></li>
                  <li><Link to={'/mymovies'} className={javohir.header_links_link}>Moi filmi</Link></li>
                  <li><Link to={'/child'} className={javohir.header_links_link}>Deti</Link></li>
                </ul>
            </div>
            <div className={javohir.header_terms}>
              <div className={javohir.header_search}>
                <button><img src={Search} alt="" /></button>
              </div>
              <div className={javohir.header_profile}>
                <button><img src={User} alt="" /></button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
