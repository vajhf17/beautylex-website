import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import CookieBanner from "./components/CookieBanner/CookieBanner"
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import PageTransition from "./components/PageTransition/PageTransition"

import Home from "./pages/Home"


import Servicios from "./pages/Servicios"
import ServiciosPeluquerias from "./pages/ServiciosPeluquerias"
import ServiciosTraspasos from "./pages/ServiciosTraspasos"
import ServiciosBarberias from "./pages/ServiciosBarberias"
import ServiciosCentrosEstetica from "./pages/ServiciosCentrosEstetica"
import ServiciosNails from "./pages/ServiciosNails"
import ServiciosAutonomos from "./pages/ServiciosAutonomos"
import ServiciosOtros from "./pages/ServiciosOtros"



import Equipo from "./pages/Equipo"
import News from "./pages/News"
import Contacto from "./pages/Contacto"
import Privacidad from "./pages/Privacidad"
import AvisoLegal from "./pages/AvisoLegal"
import Cookies from "./pages/Cookies"

function AppContent() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={
            <PageTransition><Home /></PageTransition>
          } />

{/* RETURN SERVICIOS */}

          <Route path="/servicios" element={
            <PageTransition><Servicios /></PageTransition>
          } />

          <Route path="/servicios/peluquerias" element={
            <PageTransition><ServiciosPeluquerias /></PageTransition>
          } />

           <Route path="/servicios/traspasos" element={
            <PageTransition><ServiciosTraspasos /></PageTransition>
          } />

          <Route path="/servicios/barberias" element={
            <PageTransition><ServiciosBarberias /></PageTransition>
          } />

            <Route path="/servicios/centrosestetica" element={
            <PageTransition><ServiciosCentrosEstetica /></PageTransition>
          } />

           <Route path="/servicios/nails" element={
            <PageTransition><ServiciosNails /></PageTransition>
          } />
         
           <Route path="/servicios/autonomos" element={
            <PageTransition><ServiciosAutonomos /></PageTransition>
          } />

            <Route path="/servicios/otros" element={
            <PageTransition><ServiciosOtros /></PageTransition>
          } />



{/* FINAL RETURN DE SERVICIOS */}

          <Route path="/equipo" element={
            <PageTransition><Equipo /></PageTransition>
          } />

          <Route path="/news" element={
            <PageTransition><News /></PageTransition>
          } />

          <Route path="/contacto" element={
            <PageTransition><Contacto /></PageTransition>
          } />

          <Route path="/privacidad" element={
            <PageTransition><Privacidad /></PageTransition>
          } />

          <Route path="/aviso-legal" element={
            <PageTransition><AvisoLegal /></PageTransition>
          } />

          <Route path="/cookies" element={
            <PageTransition><Cookies /></PageTransition>
          } />

        </Routes>
      </AnimatePresence>

      <Footer />
      <CookieBanner />
      <WhatsAppButton />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App