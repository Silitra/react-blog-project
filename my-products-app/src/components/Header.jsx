import React from 'react'

export default function Header({ onScrollToFooter }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h2>Магазин</h2>
        <div className="header-actions">
          <button className="btn" onClick={onScrollToFooter}>Перейти к футеру</button>
        </div>
      </div>
    </header>
  )
}
