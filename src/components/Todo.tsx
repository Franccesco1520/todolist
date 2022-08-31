const Todo = () => {
    return (
        <div className="mx-5 bg-white shadow-sm p-5 rounded-md my-5">
            <p className="font-bold text-2xl ">
                Tarea: {""} <span className="font-normal normal-case text-neutral-900">Terminar app To-do list</span>
            </p>
            <p className="font-bold my-5">
                Relevancia: {""} <span className="font-normal normal-case text-neutral-900">🟥 ¡Muy Urgente!</span>
            </p>
            <p className="font-bold">
                Descripción: {""} <span className="font-normal normal-case text-neutral-900">Necesito terminar esta aplicación aplicando lo que he aprendido hasta el momento acerca de tailwindcss y react</span>
            </p>
            
            <div className="mt-5">
                <label htmlFor="done" className="font-bold">¿Terminado?:</label>
                <input type="checkbox" id="done" className="mx-2"/>
            </div>
        </div>
    )
}

export default Todo