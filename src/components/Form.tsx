//useSatate
import { useState } from 'react'
import { Todo } from '../interfaces/interfaces'

const options: string[] = ["¿Qué tan relevante es?", "🟩 No muy urgente", "🟨 Medianamente urgente", "🟥 ¡Muy Urgente!"]

const Form = (props: any): JSX.Element => {
    const { todos, setTodos } = props

    const [nombre, setNombre] = useState("")
    const [relevancia, setRelevancia] = useState(options[0])
    const [descripcion, setDescripcion] = useState("")

    const [error, setError] = useState(false)
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()       

        const formValues: boolean = nombre === "" || relevancia === options[0] || descripcion === ""

        if(formValues){
            setError(true)
            return
        }
        setError(false)
        
        //Reiniciando formulario
        setNombre("")
        setRelevancia(options[0])
        setDescripcion("")

        const todo: Todo = {
            nombre: nombre,
            relevancia: relevancia,
            descripcion: descripcion
        }
    
        setTodos([...todos, todo])
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-5">
            <h2 className="font-regular text-3xl text-center">Registrar Pendiente ✍</h2>
            <p className="text-lg mt-5 text-center">Aquí puedes <span className=" font-bold text-blue-500">registrar</span> las tareas</p>
            
            <form
                action=""
                className="bg-white shadow-md rounded-lg p-5 font-regular mt-5"
                onSubmit={ handleSubmit }
            >   
            {
                error &&
                <div className='text-center text-white px-5 py-2 bg-red-600 mb-2'>
                    <p>¡Todos los campos son requeridos! 😤</p>
                </div>
            }
                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray uppercase">Nombre:</label>
                    <input 
                        value={ nombre } 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        type="text" id="nombre" 
                        placeholder="Nombre de la tarea..."
                        onChange={ e => setNombre(e.target.value) } 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="relevancia" className="block text-gray uppercase">Relevancia:</label>
                    <select value={ relevancia } className="w-full border-2 p-2 mt-2 shadow-lg" id="relevancia" onChange={ e => setRelevancia(e.target.value) }>
                        {
                            options.map(( option: string, idx: number ) => ( 
                                idx === 0 ? 
                                <option
                                    hidden 
                                    key={ idx }
                                    >{ option }</option> 
                                : <option 
                                    key={ idx }
                                    >{ option }</option> 
                            ))
                        }
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="descripcion" className="block text-gray uppercase">Descripcion:</label>
                    <textarea 
                        value={ descripcion } 
                        className="w-full border-2 p-2 mt-2" 
                        id="descripcion" 
                        placeholder="Describa la tarea..."
                        onChange={ e => setDescripcion(e.target.value) } 
                    >
                    </textarea>
                </div>
                <input type="submit" value="¡Registrar!" className="w-full bg-blue-600 p-2 text-white hover:bg-blue-700 rounded-md  cursor-pointer transition-all"/>
            </form>
        </div>
    )
}

export default Form