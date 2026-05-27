import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")

    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl bg-white border border-black/5 shadow-2xl rounded-3xl p-6 md:p-8 z-[100]">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

        {/* TEXTO */}
        <div className="max-w-2xl">

          <span className="text-xs uppercase tracking-[0.2em] text-brand-gold">
            Cookies
          </span>

          <h3 className="mt-3 text-2xl font-bold text-brand-blueNavy">
            Configuración de privacidad
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            Utilizamos cookies para mejorar tu experiencia, analizar el tráfico
            y optimizar el funcionamiento del sitio web. Puedes aceptar todas
            las cookies o rechazarlas.
          </p>

          <Link
            to="/cookies"
            className="inline-block mt-4 text-sm text-brand-gold hover:opacity-80 transition"
          >
            Política de cookies
          </Link>

        </div>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

          <button
            onClick={rejectCookies}
            className="border border-black/10 text-brand-blueNavy px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Rechazar
          </button>

          <button
            onClick={acceptAll}
            className="bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Aceptar todas
          </button>

        </div>

      </div>

    </div>
  )
}

export default CookieBanner