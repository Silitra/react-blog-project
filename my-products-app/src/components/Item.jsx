import React from 'react'
import Stars from './Stars'

export default function Item({ product, onRemove }) {
  const { title, price, rating, thumbnail } = product
  const imageUrl = thumbnail || (product.images && product.images[0]) || ''

  return (
    <div
      className="product-card"
      onDoubleClick={onRemove}
      title="Двойной клик — удалить"
      role="button"
      tabIndex={0}
    >
      <div className="product-image-wrapper">
        <img
          src={imageUrl}
          alt={title}
          width="350"
          height="250"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">Цена: {price} ₽</p>
        <Stars rating={rating} />
      </div>
    </div>
  )
}
