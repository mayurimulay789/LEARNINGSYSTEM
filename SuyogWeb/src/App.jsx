import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from './Pages/Contact'
import Services from './Pages/Services';
import GasGenerator from './Pages/Services/Gas-Generators'
import Stabilizers from "./Pages/Services/Stablizers"
import UPSSystems from "./Pages/Services/UPSSystems"
import CustomSolutions from "./Pages/Services/Custom-Solution"
import TechnicalSupport from "./Pages/Services/TechanicalSupport"
import Maintenance from "./Pages/Services/Maintainance"
export default function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element ={<Services/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/gas-generators" element={<GasGenerator />} />
            <Route path="/services/stabilizers" element={<Stabilizers />} />
            <Route path="/services/ups-systems" element={<UPSSystems />} />
            <Route path="/services/custom-solutions" element={<CustomSolutions />} />
            <Route path="/services/support" element={<TechnicalSupport />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
