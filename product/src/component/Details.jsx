import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'

const Details = ({ addToCart }) => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [id])

  if (!product) return <h1>Loading...</h1>

  return (
    <div className="details">
      <img src={product.thumbnail} alt={product.title} className="details-img" />
      <div className="details-content">
        <h2>{product.title}</h2>
        <p className='p2'>Price: ${product.price}</p>
        <p className='p1'>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Details