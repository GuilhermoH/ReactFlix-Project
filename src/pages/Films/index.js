import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../../services/api";

function Films() {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [film, setFilm] = useState({})

    useEffect(() => {
        async function loadFilm() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "8b5dcf8794289f39c2dfccb16587da65",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilm(response.data)
                    setLoading(false)
                })
                .catch((response) => {
                    console.log("NAO ACHEI")
                })
        }

        loadFilm()

    }, [])
    return (
        <div>
            <h1>Acessando Filme {id}</h1>
        </div>
    )
}

export default Films;