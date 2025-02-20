import React from 'react'
import './style/App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="app">
      <Header />
    <nav className="stupid-nav">
      <Main  />
    </nav>
      <Footer/>
    </div>
  )
}

export default App
