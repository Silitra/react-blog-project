import React from 'react'

export default function Footer({ refProp }) {
  return (
    <footer className="footer" ref={refProp}>
      <div className="footer-inner">
        <p>Альбина магазин товаров 2025 Ростов</p>
      </div>
    </footer>
  )
}
