import { Children, cloneElement } from "react"

function TodoHeader ({ children, loading }) {
    return (
        <header>
            {/* {cloneElement(children, { loading })}  Trabaja con un solo componente */} 
            { Children.toArray(children).map(child => cloneElement(child, { loading })) }
        </header>
    )
}

export  { TodoHeader }