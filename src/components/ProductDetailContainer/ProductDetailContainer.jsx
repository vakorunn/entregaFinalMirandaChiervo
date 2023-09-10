import ProductDetail from '../ProductDetail/ProductDetail'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import db from '../../services/Config'
import React from 'react'

const ProductDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { idItem } = useParams()

    useEffect(() => {
        const newDoc = doc(db, 'productos', idItem)

        getDoc(newDoc)
            .then(res => {
                const data = res.data()
                const newProduct = { id: res.id, ...data }
                setProduct(newProduct)
            })
    }, [idItem])
    return (
        <div>
            <ProductDetail {...product} />
        </div>
    )
}

export default ProductDetailContainer

