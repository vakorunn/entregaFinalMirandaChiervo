import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query} from 'firebase/firestore'

import db from '../../services/Config'
import ProductList from '../ProductList/ProductList'

const ProductListContainer = () => {
  const [products, setProducts] = useState([])
  const {idCategory} = useParams()

  useEffect(() => {
    const myProducts = idCategory ? query(collection(db, 'products'), where('idCategory', '==', idCategory)) : collection(db, 'products')
    getDocs(myProducts).then(res => {
      const newProducts = res.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProducts(newProducts)
    })
  }, [idCategory])
  return (
    <>
      <h2>Mis Productos</h2>
      <ProductList productos={products} />
    </>
  )
}

export default ProductListContainer