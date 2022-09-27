import React from "react";
import GetData from "../../hooks/GetData";
import javohir from "./single.module.scss";
import { Error, Loading } from "../../container";
import { useParams } from "react-router-dom";
import Vector from "../../assets/Icons/Vector.png";
import Vector1 from "../../assets/Icons/Vector1.png";
import { Link } from "react-router-dom";

const SingleMovie = () => {
  const match = useParams();
  const [loading, data, error] = GetData(`/movie/${match.id}`);
  const [loadingTwo, dataTwo, errorTwo] = GetData(`/movie/${match.id}/credits`);
  const [loadingThree, dataThree, errorThree] = GetData(`/movie/${match.id}/videos`);
  if (error && errorTwo && errorThree) return <Error />;
  if (loading && loadingTwo && loadingThree) return <Loading />;

  const directing = dataTwo.crew.filter(
    (el) => el.known_for_department === "Directing"
  );

  const {
    adult,
    title,
    release_date,
    vote_average,
    vote_count,
    backdrop_path,
    overview,
    production_countries,
    genres,
  } = data;

  console.log(dataThree);
  return (
    <div className={javohir.single_movie_wrapper}>
      <div
        className={javohir.single_back_wrapper}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_IMG_URL}${backdrop_path})`,
        }}
      >
        <div className="container">
          <div className={javohir.banner_slider}>
            <div className={javohir.movie_info}>
              <div className={javohir.movie_type}>
                <button>Novinki</button>
                <button>FULL HD</button>
              </div>
              <h1 className={javohir.moive_name}>{title}</h1>
              <div className={javohir.movie_rate}>
                <div className={javohir.rate}>
                  <span>{release_date}</span>
                  <span>| {adult ? "18 +" : "12 +"}</span>
                </div>
                <div className={javohir.rate}>
                  <img src={Vector} alt="" />
                  <span>{vote_average}</span>
                </div>
                <div className={javohir.rate}>
                  <img src={Vector1} alt="" />
                  <span>{vote_count}</span>
                </div>
              </div>
              <div className={javohir.movie_watch}>
                <button>Smotret po podpiske</button>
                <button>Dobavit v izobrenie</button>
              </div>
            </div>
          </div>

          <div className={javohir.info_movie}>
            <p>{overview}</p>
            <div className={javohir.movie_details}>
              <ul>
                <li className={javohir.left_side}>
                  <span>Год</span>
                </li>
                <li>
                  <span className={javohir.info}>{release_date}</span>
                </li>
              </ul>
              <ul>
                <li className={javohir.left_side}>
                  <span>Страна</span>
                </li>
                <li>
                  {production_countries.map((el, index) => (
                    <span
                      className={javohir.info}
                      style={{
                        marginRight: "5px",
                      }}
                      key={index}
                    >
                      {el.name},
                    </span>
                  ))}
                </li>
              </ul>
              <ul>
                <li className={javohir.left_side}>
                  <span>Жанр</span>
                </li>
                <li>
                  {genres.map((el, index) => (
                    <Link className={javohir.infos} to={"/"} key={index}>
                      {el.name},
                    </Link>
                  ))}
                </li>
              </ul>
              <ul>
                <li className={javohir.left_side}>
                  <span>Режисёр</span>
                </li>
                <li>
                  {directing.map((el, index) => (
                    <Link
                      className={`${javohir.infos} ${javohir.uppercase}`}
                      to={"/"}
                      key={index}
                    >
                      {el.name},
                    </Link>
                  ))}
                </li>
              </ul>
              <ul>
                <li className={javohir.left_side}>
                  <span>В ролях</span>
                </li>
                <li>
                  {dataTwo.cast.slice(0, 2).map((el, index) => (
                    <Link
                      className={`${javohir.infos} ${javohir.uppercase}`}
                      to={"/"}
                      key={index}
                    >
                      {el.name},
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={javohir.load_more}>
          <a href="">ПОДРОБНЕЕ</a>
        </div>
      </div>
      <div className={javohir.more_details_movie}>
        <div className="container">
          <div className={javohir.inner}>
            <div className={javohir.trailer}>
              <div className={javohir.left_side}>
                <h2>Описание</h2>
                <p>{overview}</p>
              </div>
              <div className={javohir.right_side}>
              {
                dataThree.results.slice(0, 1).map((el, index)=>(
                    <div className={javohir.iframe}>
                        <iframe key={index}  src={`https://www.youtube.com/embed/${el.key}`} title="Selena Gomez, Billie Eilish - Right My Wrongs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
