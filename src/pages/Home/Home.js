import React from "react";
import javohir from "./home.module.scss";
import './slider.scss'
import Vector from "../../assets/Icons/Vector.png";
import Vector1 from "../../assets/Icons/Vector1.png";
import Slider from "react-slick";
import { settings } from "../../utils/slider";
import GetData from "../../hooks/GetData";
import { Loading, Error, SliderMovie } from "../../container";

const Home = () => {
  const [loading, data, error] = GetData("/movie/upcoming");
  const [loadingTwo, dataTwo, errorTwo] = GetData("/movie/now_playing");
  if (error && errorTwo ) return <Error />;
  if (loading && loadingTwo) return <Loading />;
  
  return (
    <div className={javohir.home_wrapper}>
      <div className={javohir.movie_slider_wrapper}>
        <Slider {...settings}>
          {data?.results?.map((el, index) => (
            <div>
              <div
                className={javohir.banner_movie_wrapper}
                key={index}
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_IMG_URL}${el.backdrop_path})`,
                }}
              >
                <div className="container">
                  <div className={javohir.banner_slider}>
                    <div className={javohir.movie_info}>
                      <div className={javohir.movie_type}>
                        <button>Novinki</button>
                        <button>FULL HD</button>
                      </div>
                      <h1 className={javohir.moive_name}>{el.title}</h1>
                      <div className={javohir.movie_rate}>
                        <div className={javohir.rate}>
                          <span>{el.release_date}</span>
                          <span>| {el.adult ? "18 +" : "12 +"}</span>
                        </div>
                        <div className={javohir.rate}>
                          <img src={Vector} alt="" />
                          <span>{el.vote_average}</span>
                        </div>
                        <div className={javohir.rate}>
                          <img src={Vector1} alt="" />
                          <span>{el.vote_count}</span>
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
            </div>
          ))}
        </Slider>
      </div>
      <div className={javohir.new_movies}>
        <div className="container">
          <SliderMovie data={dataTwo?.results}/>
        </div>
      </div>

      <div className={javohir.last_movie}>
        <div className={javohir.left_side}>
            <img src="" alt="" />
        </div>
        <div className={javohir.right_side}>
          <div className={javohir.top}></div>
          <div className={javohir.stars}></div>
          <h1></h1>
          <p></p>
          <div className={javohir.watch}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//
