function Contacto() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2F2F2F]">
          Hablemos de tu negocio
        </h1>

        <p className="mt-4 text-gray-600">
          Escríbenos y te responderemos en menos de 24h.
        </p>
      </div>

      {/* Contenido */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">

        {/* FORMULARIO */}
        <form className="bg-white p-8 rounded-xl shadow-sm space-y-6">

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              Mensaje
            </label>
            <textarea
              rows={5}
              placeholder="Cuéntanos en qué podemos ayudarte"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-gold text-white py-3 rounded-md hover:opacity-90 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* INFO + MAPA */}
        <div className="space-y-8">

          {/* Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <div>
              <h3 className="font-semibold text-[#2F2F2F]">Email</h3>
              <p className="text-gray-600">info@beautylex.com</p>
            </div>

            <div>
                <h3 className="font-semibold text-[#2F2F2F]">Teléfono</h3>
                <p className="text-gray-600">+34 625 71 93 68</p>
            </div>

            <div>
                <h3 className="font-semibold text-[#2F2F2F]">Dirección</h3>
                <p className="text-gray-600">
                Calle Aragó 116, local, CP 08015 Barcelona
                </p>
            </div>
          </div>

          {/* MAPA */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <iframe
                src="https://www.google.com/maps?q=Calle+Aragó+116+Barcelona&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contacto