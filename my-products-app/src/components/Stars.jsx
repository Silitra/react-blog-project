import React from 'react'
export default function Stars({ rating = 0 }) {
  const activeCount = Math.round(rating)
  const stars = [1,2,3,4,5]

  return (
    <div className="stars" aria-label={`Рейтинг ${rating}`}>
      {stars.map((num) => (
        <span
          key={num}
          className={`fa fa-star ${num <= activeCount ? 'active' : ''}`}
          aria-hidden="true"
        />
      ))}
      <span className="rating-text"> ({rating})</span>
    </div>
  )
}
