import { TodoProps } from "../interfaces/interfaces"

const Todo = (props: TodoProps) => {
    return (
        <div className="mx-5 bg-white shadow-sm p-5 rounded-md my-5">
            <p className="font-bold text-2xl ">
                Tarea: {""} <span className="font-normal normal-case text-neutral-900">{ props.title }</span>
            </p>
            <p className="font-bold my-5">
                Relevancia: {""} 
                <span className="font-normal normal-case text-neutral-900">
                    { props.priority === "low" && "🟩 No muy urgente" }
                    { props.priority === "medium" && "🟨 Medianamente urgente" }
                    { props.priority === "high" && "🟥 ¡Muy Urgente!" }
                </span>
            </p>
            <p className="font-bold">
                Descripción: {""} <span className="font-normal normal-case text-neutral-900">{ props.description }</span>
            </p>
            
            <div className="mt-5">
                <label htmlFor="done" className="font-bold">¿Terminado?:</label>
                <input type="checkbox" id="done" className="mx-2"/>
            </div>
        </div>
    )
}

export default Todo