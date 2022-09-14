import React from 'react'
import javohir from './home.module.scss'
import Vector from '../../assets/Icons/Vector.png'
import Vector1 from '../../assets/Icons/Vector1.png'
import Slider from "react-slick";
import { settings } from '../../utils/slider';
import GetData from '../../hooks/GetData';


const Home = () => {
  console.log(process.env.REACT_APP_API_KEY);

  const [loading, data, error] = GetData('/movie/popular')
  if(error) return <>Error</>
  if(loading) return <>Loading</>
  console.log(data, 'data');
  


  return (
    <div className={javohir.home_wrapper}>
    <Slider {...settings}>
      <div className={javohir.banner_movie_wrapper}>
        <div className="container">
          <div className={javohir.banner_slider}>
              <div className={javohir.movie_info}>
                <div className={javohir.movie_type}>
                  <button>Novinki</button>
                  <button>FULL HD</button>
                </div>
                <h1 className={javohir.moive_name}>Ford protiv Ferrari</h1>
                <div className={javohir.movie_rate}>
                  <div className={javohir.rate}>
                    <span>2019 </span>
                    <span>| 16 +</span>
                  </div>
                  <div className={javohir.rate}>
                    <img src={Vector} alt="" />
                    <span>6.9</span>
                  </div>
                  <div className={javohir.rate}>
                    <img src={Vector1} alt="" />
                    <span>6.518</span>
                  </div>
                </div>
                <div className={javohir.movie_watch}>
                  <button>Smotret po podpiske</button>
                  <button>Dobavit v izobrenie</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  )
}

export default Home
