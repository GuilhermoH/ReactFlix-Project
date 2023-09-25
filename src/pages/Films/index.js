import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./film.css";

function Films() {
  const { id } = useParams();
  const navegation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState({});

  useEffect(() => {
    async function loadFilm() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "8b5dcf8794289f39c2dfccb16587da65",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilm(response.data);
          setLoading(false);
        })
        .catch((response) => {
          console.log("NAO ACHEI");
          navegation("/", { replace: true });
          return;
        });
    }

    loadFilm();

    return () => {
      console.log("COMPONENTE");
    };

    if (loading) {
      return (
        <div className="film-info">
          <h2>Carregando filme</h2>
        </div>
      );
    }
  }, [navegation, id]);

  return (
    <div className="film-info">
      <h1>{film.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} />
      <h3>Sinopse</h3>
      <span>{film.overview}</span>
      <br />
      <strong>Avaliação : {film.vote_average}/10</strong>

      <div className="area-button">
        <button>
          <a
            target="_blank"
            href={`https://www.youtube.com/results?search_query=${film.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Films;
