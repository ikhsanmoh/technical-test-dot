import Header from './components/base/Header'
import Footer from './components/base/Footer'
import { useState } from 'react'
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="container">
      <Header />
      <main>
        Main
      </main>
      <Footer />
    </div>
  )
}

export default App;
