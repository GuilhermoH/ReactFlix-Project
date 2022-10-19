import api from "../../services/api";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './home.css'
//https://api.themoviedb.org/3
function Home() {
    const [films, setFilms] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        async function loadFilms() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "8b5dcf8794289f39c2dfccb16587da65",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilms(response.data.results.slice(0,10))
        }

        loadFilms();
    }, [])
    return (
        <div className="container">
            <div className="listOfFilms">
                {films.map((films) => {
                    return (
                        <article key={films.id}>
                            <strong>{films.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${films.poster_path}`}/>
                            <Link to={`/films/${films.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;