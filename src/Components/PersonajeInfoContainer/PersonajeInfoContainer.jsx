import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PersonajeInfo from "../PersonajeInfo/PersonajeInfo"

const PersonajeInfoContainer = () => {
    const { idPj } = useParams()
    const [personaje, setPersonaje] = useState([])

    return (
        <div>
            {
                personaje.map(personaje => (
                    <li key={personaje._id}>{personaje.Nombre}</li>
                ))
            }
        </div>
    )
}

export default PersonajeInfoContainer