import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/Config'
import ProductList from '../ProductList/ProductList'

const ProductListContainer = () => {
    const [products, setProducts] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        const myProducts = idCategoria ? query(collection(db, 'inventario'), where('idCat', '==', idCategoria)) : collection(db, 'inventario')
        getDocs(myProducts)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(nuevosProductos);
            })
    }, [idCategoria])
    return (
        <>
            <h2 style={{ color: "blue", textAlign: "center" }}> Mis Productos </h2>
            <ProductList productos={products} />
        </>
    )
}

export default ProductListContainer