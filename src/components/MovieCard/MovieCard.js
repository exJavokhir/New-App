import React from 'react'
import javohir from './moviecard.module.scss'
import { Link } from 'react-router-dom'

const MovieCard = ({image, title}) => {
  return (
    <Link to={'/'}>
    <div className={javohir.MovieCard_wrapper}>
        <div className={javohir.card_top}>
            <img src={`${process.env.REACT_APP_IMG_URL}${image}`}alt="" />
        </div>
        <div className={javohir.card_content}>
            <h3>{title}</h3>
            <span>Besplatno</span>
        </div>
    </div></Link>
  )
}

export default MovieCard
