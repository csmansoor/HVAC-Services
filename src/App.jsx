import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CarePlansPage from './pages/CarePlansPage'
import ServicesPage from './pages/ServicesPage'

// Service Pages
import HeatPumpPage from './pages/services/HeatPumpPage'
import WaterHeaterPage from './pages/services/WaterHeaterPage'
import HeatingPage from './pages/services/HeatingPage'
import CoolingPage from './pages/services/CoolingPage'
import BoilerPage from './pages/services/BoilerPage'
import FireplacePage from './pages/services/FireplacePage'
import AirQualityPage from './pages/services/AirQualityPage'
import WaterFiltrationPage from './pages/services/WaterFiltrationPage'
import GasLinePage from './pages/services/GasLinePage'
import DuctworkPage from './pages/services/DuctworkPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/care-plans" element={<CarePlansPage />} />
            <Route path="/services" element={<ServicesPage />} />

            {/* Individual Service Pages */}
            <Route path="/services/heat-pump" element={<HeatPumpPage />} />
            <Route path="/services/water-heater" element={<WaterHeaterPage />} />
            <Route path="/services/heating" element={<HeatingPage />} />
            <Route path="/services/cooling" element={<CoolingPage />} />
            <Route path="/services/boiler" element={<BoilerPage />} />
            <Route path="/services/fireplace" element={<FireplacePage />} />
            <Route path="/services/air-quality" element={<AirQualityPage />} />
            <Route path="/services/water-filtration" element={<WaterFiltrationPage />} />
            <Route path="/services/gas-line" element={<GasLinePage />} />
            <Route path="/services/ductwork" element={<DuctworkPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App