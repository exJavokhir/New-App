import React from "react";
import javohir from "./slidermovie.module.scss";
import Slider from "react-slick";
import MovieCard from "../../components/MovieCard/MovieCard";
import { settingsCards } from "../../utils/slider";
import './slider.scss'

const SliderMovie = ({data, title}) => {
  return (
    <div className={javohir.SliderMovie_wrapper}>
      <h2>{title}</h2>
      <Slider {...settingsCards}>
        {data?.map((el, index) => (
          <MovieCard key={index} image={el.poster_path} title={el.title} id={el.id}/>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMovie;
