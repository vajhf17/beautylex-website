function News() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 max-w-6xl mx-auto">

      {/* TÍTULO */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
          Presencia en el sector
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Participamos activamente en eventos y encuentros
          del sector belleza y bienestar.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        
<div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

  {/* IMAGEN */}
  <div className="relative overflow-hidden">
    <img
      src="/evento-real.jpg"
      className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
    />

    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
  </div>

  {/* CONTENIDO */}
  <div className="p-6 bg-white">

    {/* META */}
    <p className="text-xs text-gray-400 uppercase tracking-wider">
      Barcelona · 27 Abril 2026
    </p>

    {/* TÍTULO */}
    <h3 className="mt-2 font-semibold text-lg text-brand-black">
      El lado legal del éxito en belleza
    </h3>

    {/* DESCRIPCIÓN */}
    <p className="mt-2 text-gray-600 text-sm">
      Ponencia sobre cómo proteger tu salón, tu marca y tu equipo sin frenar el crecimiento.
    </p>

    {/* DATOS CLAVE */}
    <div className="mt-4 text-sm text-gray-500 space-y-1">
      <p>📍 Fira Barcelona</p>
      <p>🕒 15:50h – 16:30h</p>
    </div>

  </div>
</div>

        {/* CARD 2 */}
        <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

          <div className="relative overflow-hidden">
            <img
              src="/evento2.jpg"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
          </div>

          <div className="p-6 bg-white">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Madrid · 2025
            </p>

            <h3 className="mt-2 font-semibold text-lg text-brand-black">
              Congreso Estética Profesional
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              Participación como consultores legales del sector beauty.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

          <div className="relative overflow-hidden">
            <img
              src="/evento3.jpg"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
          </div>

          <div className="p-6 bg-white">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              Valencia · 2025
            </p>

            <h3 className="mt-2 font-semibold text-lg text-brand-black">
              Networking Beauty & Wellness
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              Encuentro con profesionales del sector para asesoramiento legal.
            </p>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="https://instagram.com"
          target="_blank"
          className="inline-block bg-brand-gold text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          Ver más en Instagram
        </a>
      </div>

    </section>
  )
}

export default News