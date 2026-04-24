import { useState, useEffect } from "react"

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted")
    if (!accepted) setVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-md flex flex-col md:flex-row justify-between items-center gap-4 z-50">
      
      <p className="text-sm text-gray-600 text-center md:text-left">
        Utilizamos cookies para mejorar tu experiencia.{" "}
        <a href="/cookies" className="underline text-brand-gold">
          Más información
        </a>
      </p>

      <button
        onClick={acceptCookies}
        className="bg-brand-gold text-white px-4 py-2 rounded-md"
      >
        Aceptar
      </button>

    </div>
  )
}

export default CookieBanner