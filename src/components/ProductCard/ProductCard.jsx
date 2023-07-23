import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='product-card'>
        <img className='product-img' src="../../img/camisa-bordo-lisa.jpg" alt="camisa-bordo-lisa" /> //No muestra la imagen
        <h2 className='product-name'>Camisa Bordo Lisa</h2>
        <p className='product-price'>Precio:4500</p>
        <button className='show-more-btn'>Mostrar Más</button>
    </div>
  )
}

export default ProductCard