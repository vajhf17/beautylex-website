import { useState } from "react"

function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Tooltip / mensaje */}
      {open && (
        <div className="bg-white shadow-lg rounded-xl p-4 max-w-xs animate-fade-in">
          <p className="text-sm text-gray-700">
            👋 Hola, ¿Cómo te ayudamos?  
            Escríbenos por WhatsApp y un agente se pondra en contacto.
          </p>
        </div>
      )}

      {/* Botón */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        💬
      </button>

      {/* Botón directo WhatsApp */}
      <a
        href="https://wa.me/34625719368?text=Hola,%20quiero%20información%20sobre%20vuestros%20servicios"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg text-sm transition"
      >
        Hablar por WhatsApp
      </a>

    </div>
  )
}

export default WhatsAppButton