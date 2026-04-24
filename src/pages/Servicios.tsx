import Pricing from "../components/Pricing/Pricing"

function Servicios() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-[#2F2F2F] leading-tight">
          Asesoría legal para profesionales del sector beauty
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Especializados en peluquerías, centros de estética, tatuadores y profesionales del sector. 
          Te ayudamos a cumplir la normativa y evitar sanciones.
        </p>
      </div>

      {/* PROFESIONALES */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Para profesionales
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ASESORIA */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Asesoría jurídica especializada
            </h3>

            <p className="text-gray-600 mb-4">
              Analizamos tu negocio y te indicamos exactamente qué debes cumplir según tu actividad:
              peluquería, estética, uñas, tatuajes o micropigmentación.
            </p>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Revisión legal de tu centro o actividad</li>
              <li>✔ Cumplimiento de sanidad y normativa autonómica</li>
              <li>✔ Protección ante inspecciones</li>
              <li>✔ Asesoramiento para colegiados y autónomos</li>
            </ul>

            <p className="mt-4 text-xs text-gray-500">
              Dirigido a: peluquerías, esteticistas, tatuadores, micropigmentadores y autónomos del sector.
            </p>
          </div>

          {/* GESTION */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Gestión administrativa legal
            </h3>

            <p className="text-gray-600 mb-4">
              Nos encargamos de todos los trámites necesarios para que puedas operar legalmente sin complicaciones.
            </p>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Licencias de apertura</li>
              <li>✔ Alta de actividad</li>
              <li>✔ Registro sanitario (si aplica)</li>
              <li>✔ Gestión documental completa</li>
            </ul>

            <p className="mt-4 text-xs text-gray-500">
              Ideal para nuevos negocios o regularización de centros existentes.
            </p>
          </div>

        </div>
      </div>

      {/* COLECTIVOS */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-10">
          Colectivos, academias y asociaciones
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Asesoramiento legal para asociaciones
            </h3>

            <p className="text-gray-600 mb-4">
              Apoyo jurídico continuo para asociaciones del sector beauty, academias de formación y gremios.
            </p>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Consultas legales recurrentes</li>
              <li>✔ Adaptación a normativa vigente</li>
              <li>✔ Protección jurídica del colectivo</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Estatutos y documentación legal
            </h3>

            <p className="text-gray-600 mb-4">
              Redacción de documentos legales adaptados a asociaciones y organizaciones profesionales.
            </p>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Estatutos</li>
              <li>✔ Convenios</li>
              <li>✔ Reglamentos internos</li>
            </ul>
          </div>

        </div>

        {/* BLOQUE COMPLETO */}
        <div className="bg-white p-8 rounded-xl shadow-md mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Representación legal
          </h3>

          <p className="text-gray-600 mb-4">
            Defensa jurídica en conflictos colectivos o situaciones legales complejas.
          </p>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>✔ Conflictos entre profesionales</li>
            <li>✔ Problemas con administración</li>
            <li>✔ Reclamaciones y defensa legal</li>
          </ul>
        </div>

      </div>

      {/* TRASPASOS DESTACADO */}
      <div className="mt-24 bg-[#F1EFE7] p-12 rounded-xl text-center">

        <h2 className="text-3xl font-bold mb-4">
          Traspasos de negocio
        </h2>

        <p className="text-gray-700 max-w-xl mx-auto">
          Gestionamos traspasos de peluquerías, centros estéticos y negocios del sector con total seguridad jurídica.
        </p>

        <ul className="mt-6 text-sm text-gray-700 space-y-2">
          <li>✔ Revisión de contratos</li>
          <li>✔ Seguridad legal en la operación</li>
          <li>✔ Evitar fraudes o problemas futuros</li>
        </ul>

        <a
          href="/contacto"
          className="inline-block mt-8 bg-brand-gold text-white px-8 py-3 rounded-md hover:opacity-90 transition"
        >
          Solicita información
        </a>

      </div>

      {/* PRICING */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Planes de asesoría
        </h2>

        <p className="text-gray-600 mb-10">
          Elige el plan que mejor se adapte a tu negocio
        </p>

        <Pricing />
      </div>

    </section>
  )
}

export default Servicios