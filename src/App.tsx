import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <Router>
      <div className="kt-app">
        <Navbar />
        <div className="kt-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
