import { useState, useEffect } from "react";
import Personajes from "../Personajes/Personajes";
import { Link } from "react-router-dom";

const PersonajesContext = () => {
    const [personajes, setPersonajes] = useState([]);
    const [filter, setFilter] = useState(5);
    const [page, setPage] = useState(1);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        if (busqueda) {
            fetch(`https://apisimpsons.fly.dev/api/personajes/find/${busqueda}`)
                .then((result) => result.json())
                .then((data) => setPersonajes(data.result))
                .catch((error) => console.log(error));
        } else {
            // Si la búsqueda está vacía, puedes volver a cargar todos los personajes
            fetch(`https://apisimpsons.fly.dev/api/personajes?limit=${filter}&page=${page}`)
                .then((result) => result.json())
                .then((data) => setPersonajes(data.docs))
                .catch((error) => console.log(error));
        }
    }, [busqueda, filter, page]);

    const manejadorSubmit = (event) => {
        event.preventDefault();
        setBusqueda(event.target.busqueda.value);
        event.target.busqueda.value = "";
    };

    const filterPersonajes = (cantidad) => {
        setFilter(cantidad);
    };

    const pageSiguiente = () => {
        setPage((prev) => prev + 1);
    };

    const pageAnterior = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        } else {
            setPage(1);
        }
    };

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex items-center justify-center gap-5 m-5">
                <button className="py-2 px-4 bg-white border border-sky-600 rounded-lg" onClick={pageAnterior}>
                    {"<"}
                </button>
                <span className="py-2 px-4 bg-white border border-sky-600 rounded-lg">{page}</span>
                <button className="py-2 px-4 bg-white border border-sky-600 rounded-lg" onClick={pageSiguiente}>
                    {">"}
                </button>
            </div>

            <div className="flex items-center justify-center gap-5 m-5">
                <p className="text text-lg font-normal">Personajes por Página</p>
                <button className="py-1 px-2 bg-white border border-sky-600 rounded-lg" onClick={() => filterPersonajes(10)}>
                    10
                </button>
                <button className="py-1 px-2 bg-white border border-sky-600 rounded-lg" onClick={() => filterPersonajes(20)}>
                    20
                </button>
                <button className="py-1 px-2 bg-white border border-sky-600 rounded-lg" onClick={() => filterPersonajes(30)}>
                    30
                </button>
                <button className="py-1 px-2 bg-white border border-sky-600 rounded-lg" onClick={() => filterPersonajes(40)}>
                    40
                </button>
                <button className="py-1 px-2 bg-white border border-sky-600 rounded-lg" onClick={() => filterPersonajes(50)}>
                    50
                </button>
            </div>

            <form className="w-full m-5 flex items-center justify-center gap-5" onSubmit={manejadorSubmit}>
                <input className="p-2 rounded-lg border border-sky-600" type="text" name="busqueda" />
                <button className="py-2 rounded-2xl px-4 bg-white border border-sky-600" type="submit">Buscar</button>
            </form>

            <ul className="flex gap-5 items-center justify-center flex-wrap w-4/5">
                {personajes.map((personaje) => (
                    <Link key={personaje._id} to={`/personajes/${personaje._id}`}><Personajes key={personaje._id} {...personaje} /></Link>
                ))}
            </ul>
        </div>
    );
};

export default PersonajesContext;
