import React, { useEffect, useState } from 'react'
import Item from './Item'

const url = "https://dummyjson.com/products"

export default function List() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Ошибка')
        return res.json()
      })
      .then(data => {
        if (data.products) {
          setProducts(data.products)
        } else if (Array.isArray(data)) {
          setProducts(data)
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const handleRemove = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  if (loading) return <p className="status">Загрузка...</p>
  if (error) return <p className="status error">Ошибка: {error}</p>

  return (
    <section className="products-grid">
      {products.map(product => (
        <Item key={product.id} product={product} onRemove={() => handleRemove(product.id)} />
      ))}
    </section>
  )
}
