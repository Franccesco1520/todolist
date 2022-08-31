import { ListProps } from "../interfaces/interfaces"
import Todo from "./Todo"

const List = ( props: ListProps ) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
            <h2 className="text-3xl font-regular text-center">Listado de pendientes 🧾</h2>
            <p className="text-lg mt-5 mb-10 text-center">
                Marca con un ✅ las <span className="font-bold text-blue-500">tareas</span> que ya hayas terminado.
            </p>
            { props.todos.map( ( todo, idx ) => {
                return (
                    <Todo key={ idx } { ...todo }/>
                )
            })}
            
        </div>
    )
}

export default List