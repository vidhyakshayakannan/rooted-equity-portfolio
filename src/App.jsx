import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ResearchPage from './pages/ResearchPage'
import TeachingPage from './pages/TeachingPage'
import ConsultationPage from './pages/ConsultationPage'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
