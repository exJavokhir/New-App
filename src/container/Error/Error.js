import React from 'react'
import javohir from './error.module.scss'
import Space from '../../assets/Images/space.jpg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className={javohir.error_wrapper} style={{
        backgroundImage: `url(${Space})`
    }}>
      <div className={javohir.content_wrapper}>
        <h1>Oops Bro! You ran out of us.</h1>
        <p>Don't worry. It's not a big deal, just go back to the home page as soon as you can.</p>
        <Link to={'/'} className={javohir.button}>Get back to Home</Link>
      </div>
      <h1 className={javohir.error_name}>404</h1>
    </div>
  )
}

export default Error
