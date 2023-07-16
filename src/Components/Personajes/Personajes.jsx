const Personajes = ({ Nombre, Imagen }) => {
    return (
        <li className="flex items-center gap-3 justify-center flex-col p-4 w-60 h-auto border-white border rounded-2xl">
            <img className="w-40 h-72 overflow-hidden object-cover" src={Imagen} alt={Nombre} />
            <h3 className="font-medium text-lg">{Nombre}</h3>
        </li>
    )
}

export default Personajes