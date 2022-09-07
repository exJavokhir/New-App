const API_KEY = '86940d36084c3669a50736d6baf4f3ce'
const API_BASE_URL = 'https://api.themoviedb.org/3'
let banner_movie = document.querySelector('.banner_main_movie')
let requestOptions = {
    method: 'GET'
}
fetch(`${API_BASE_URL}/movie/upcoming?adukt=true&api_key=${API_KEY}`)
.then(res => res.text())
.then(res => get_movies(JSON.parse(res)))
.catch(err => console.log(err))



function get_movies(data) {
    data.results.forEach(element => {
        let wrapper_div = document.createElement('div')
        let wrapper_di2 = document.createElement('div')
        wrapper_div.classList.add('blocks_wrapper')
        let btn1 = document.createElement('button')
        let btn2 = document.createElement('button')
        btn1.classList.add('movie_type')
        btn2.classList.add('movie_type')
        let btn3 = document.createElement('button')
        let btn4 = document.createElement('button')
        btn3.classList.add('movie_watch')
        btn4.classList.add('movie_watch')
        let h1 = document.createElement('h1')
        h1.classList.add('movie_name')
        let div1 = document.createElement('div')
        div1.classList.add('top_div')
        let div2 = document.createElement('div')
        div2.classList.add('middle_div')
        let div3 = document.createElement('div')
        div3.classList.add('bottom_div')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        span1.classList.add('movie_info')
        span2.classList.add('movie_info')
        span3.classList.add('movie_info')
        btn1.textContent = 'Новинка'
        btn2.textContent = 'FULL HD'
        div1.appendChild(btn1)
        div1.appendChild(btn2)
        h1.textContent = element.title
        span1.textContent = element.release_date
        span2.textContent = element.vote_average
        span3.textContent = element.vote_count
        btn3.textContent = 'Смотреть по подписке'
        btn4.textContent = 'Добавить в избранное'
        div2.appendChild(span1)
        div2.appendChild(span2)
        div2.appendChild(span3)
        div3.appendChild(btn3)
        div3.appendChild(btn4)

        wrapper_di2.appendChild(div1)
        wrapper_di2.appendChild(h1)
        wrapper_di2.appendChild(div2)
        wrapper_di2.appendChild(div3)
        wrapper_div.appendChild(wrapper_di2)
        wrapper_div.classList.add('background')
        wrapper_di2.classList.add('container', 'movie_blocks')
        banner_movie.appendChild(wrapper_div)


        wrapper_div.style.backgroundImage = `url(${'https://image.tmdb.org/t/p/original/' + element.backdrop_path})`
        setTimeout(() => {
            $('.banner_main_movie').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
              });
        }, 100);

    });
}





        