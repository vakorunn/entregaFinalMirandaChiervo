import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CartContext"
import db from "../../services/Config.js"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const administrarFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Complete los campos faltantes")
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.productName,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        }
            .then(() => {
                addDoc(collection(db, 'ordenes'), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                    })
                    .cath((error) => {
                        setError(`Error creando la orden\nMotivo:${error}`)
                    })
            })
            .catch((error) => {
                setError(`Error actualizando el error\nMotivo:${error}`)
            })
    }

    return (
        <div>
            <h2>¡YA CASI TERMINAMOS!</h2>
            <p>Complete el formulador con su información</p>
            <form className="checkour-form" onSubmit={administrarFormulario}>
                {carrito.map(producto => (
                    <div key={producto.id}>
                        <p>Producto:{producto.item.nombre} Unidades: {producto.cantidad} </p>
                        <p>Precio:${producto.item.precio}</p>
                        <hr />
                    </div>
                ))}
                <hr />

                <div className="checkout-form__item">
                    <label htmlFor=""> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="checkout-form__item">
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="checkout-form__item">
                    <label htmlFor=""> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="checkout-form__item">
                    <label htmlFor=""> Email </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="checkout-form__item">
                    <label htmlFor=""> Confirmar Email </label>
                    <input type="text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {
                    error && <p className="checkout-error"> {error} </p>
                }

                <button type="submit" className="checkout-buy-btn"> ¡Finalizar Compra! </button>
            </form>
            {
                ordenId && (
                    <strong> ¡Compra finalizada con extio! Su nro de orden es {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout