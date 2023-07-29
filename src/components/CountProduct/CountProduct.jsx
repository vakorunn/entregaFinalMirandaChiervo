import React from 'react'
import { useState } from 'react'
import './CountProduct.css'

const CountProduct = ({ inicio, stock, funcionAgregar }) => {
    const [count, setCount] = useState(inicio)

    const incrementar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrementar = () => {
        if (count > inicio) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="count-container">
                <button onClick={decrementar}> + </button>
                <p> {count} </p>
                <button onClick={incrementar}> - </button>
            </div>
            <button onClick={() => funcionAgregar(count)}> Añadir al Carro </button>
        </>
    )
}

export default CountProduct