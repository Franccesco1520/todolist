//useSatate
import React, { useState } from 'react'
import { AppProps, PriorityType, PriorityValues, TodoProps } from '../interfaces/interfaces'
import ErrorMessage from './ErrorMessage'

//Array de objetos de tipo PriorityValues
const options: PriorityValues[] = [
    { value: "default", message: "¿Qué tan relevante es?" }, 
    { value: "low", message: "🟩 No muy urgente" },
    { value: "medium", message: "🟨 Medianamente urgente" },
    { value: "high", message: "🟥 ¡Muy Urgente!" }
]

const Form = (props: AppProps): JSX.Element => {
    const { todos, setTodos } = props

    const [nombre, setNombre] = useState("")
    //Tipando un useState a tipo priorityType y seteandolo al value default
    const [relevancia, setRelevancia] = useState <PriorityType>('default')
    const [descripcion, setDescripcion] = useState("")
    const [error, setError] = useState(false)
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()       

        const formInvalid: boolean = nombre === "" || relevancia === options[0].value || descripcion === ""

        if(formInvalid){
            setError(true)
            return
        }

        const todo: TodoProps = {
            title: nombre,
            priority: relevancia,
            description: descripcion,
            done: false
        }
    
        setTodos([...todos, todo])

         //Reiniciando formulario
         setNombre("")
         setRelevancia(options[0].value)
         setDescripcion("")
         setError(false)
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

            { error && <ErrorMessage> <p>¡Todos los campos son requeridos! 😤</p> </ErrorMessage> }

                <div className="mb-5">
                    <label htmlFor="nombre" className="block text-gray uppercase">Nombre:</label>
                    <input 
                        value={ nombre } 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        type="text" id="nombre" 
                        placeholder="Nombre de la tarea..."
                        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value) } 
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="relevancia" className="block text-gray uppercase">Relevancia:</label>
                    <select value={ relevancia } 
                        className="w-full border-2 p-2 mt-2 shadow-lg" 
                        id="relevancia" 
                        onChange={ (e: React.ChangeEvent<HTMLSelectElement> ) => setRelevancia(e.target.value as PriorityType) }>
                        {
                            options.map(( option: PriorityValues, idx: number ) => ( 
                                idx === 0 ? 
                                <option
                                    value={ option.value }
                                    hidden 
                                    key={ idx }
                                    >{ option.message }</option> 
                                : <option 
                                    value={ option.value }
                                    key={ idx }
                                    >{ option.message }</option> 
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
                        onChange={ (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescripcion(e.target.value) } 
                    >
                    </textarea>
                </div>
                <input type="submit" value="¡Registrar!" className="w-full bg-blue-600 p-2 text-white hover:bg-blue-700 rounded-md  cursor-pointer transition-all"/>
            </form>
        </div>
    )
}

export default Form