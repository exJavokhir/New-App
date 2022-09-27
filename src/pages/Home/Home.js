import React from "react";
import javohir from "./home.module.scss";
import "./slider.scss";
import Vector from "../../assets/Icons/Vector.png";
import Vector1 from "../../assets/Icons/Vector1.png";
import Slider from "react-slick";
import { settings } from "../../utils/slider";
import GetData from "../../hooks/GetData";
import { Loading, Error, SliderMovie } from "../../container";
import Vote from "../../assets/Icons/voteStar.png";
const Home = () => {
  const [loading, data, error] = GetData("/movie/upcoming");
  const [loadingTwo, dataTwo, errorTwo] = GetData("/movie/now_playing");
  if (error && errorTwo) return <Error />;
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
          <SliderMovie data={dataTwo?.results} title={'Новое кино'}/>
        </div>
      </div>

      <div className={javohir.center_ad_movie}>
        <div className="container">
          <div className={javohir.inner}>
            {dataTwo.results?.splice(1, 1).map((el, index) => (
              <div className={javohir.last_movie} key={index}>
                <div className={javohir.left_side}>
                  <img
                    src={`${process.env.REACT_APP_IMG_URL}${el.backdrop_path}`}
                    alt=""
                  />
                </div>
                <div className={javohir.right_side}>
                  <div className={javohir.top}>
                    <span>Эксклюзивно</span>
                    <span>{el.adult ? "18+" : "12+"}</span>
                    <span>FULL HD</span>
                  </div>
                  <div className={javohir.stars}>
                    <img src={Vote} alt="" />
                    <h3>
                      {el.vote_average} <span>TMDB</span>
                    </h3>
                  </div>
                  <h1>{el.title}</h1>
                  <p>{el.overview}</p>
                  <div className={javohir.watch}>
                    <button>Смотреть по подписке</button>
                    <button>Добавить в избранное</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={javohir.popular_aladdin}>
        <div className="container">
          <div className={javohir.inner}>
              <SliderMovie data={data?.results} title={'Популярный на Alladdin'}/>
          </div>
        </div>
      </div>

      <div className={javohir.popular_aladdin}>
        <div className="container">
          <div className={javohir.inner}>
              <SliderMovie data={dataTwo?.results} title={'Еще не вышло'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
