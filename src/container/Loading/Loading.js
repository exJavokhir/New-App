import React from 'react'
import javohir from './loading.module.scss'
import MovieLoading from '../../assets/Images/loading.gif'

const Loading = () => {
  return (
    <div className={javohir.loading_wrapper}>
      <img src={MovieLoading} alt="" />
      <span className={javohir.loading_text}>Loading... </span>
    </div>
  )
}

export default Loading
