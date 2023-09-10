import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'

import db from '../../services/Config'
import ProductList from '../ProductList/ProductList'

const ProductListContainer = () => {
  const [products, setProducts] = useState([])
  const { idCategoria } = useParams()

  useEffect(() => {
    const myProducts = idCategoria ? query(collection(db, 'productos'), where('idCategory', '==', idCategoria)) : collection(db, 'productos')
    
    getDocs(myProducts)
    .then(res => {
      const newProducts = res.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data }
      })
      setProducts(newProducts)
    })
  }, [idCategoria])
  return (
    <>
      <h2>Mis Productos</h2>
      <ProductList productos={products} />
    </>
  )
}

export default ProductListContainer