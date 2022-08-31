import { PropsWithChildren } from "react"

const ErrorMessage = ({ children }: PropsWithChildren): JSX.Element => {
    return (
        <div className='text-center text-white px-5 py-2 bg-red-600 mb-2'>
            { children }
        </div>
    )
}

export default ErrorMessage