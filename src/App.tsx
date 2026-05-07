import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="kt-app">
        <Navbar />
        <div className="kt-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

