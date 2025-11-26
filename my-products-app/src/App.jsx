import React, { useRef } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default function App() {
  const footerRef = useRef(null)

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Header onScrollToFooter={scrollToFooter} />
      <main>
        <h1 className="title">Каталог товаров</h1>
        <List />
      </main>

      <Footer refProp={footerRef} />
    </div>
  )
}
