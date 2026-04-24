import { Link } from "react-router-dom"

function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-brand-light mb-16 md:mb-24">
      <div className="max-w-6xl mx-auto px-10">

        <h2 className="text-4xl font-bold text-center text-brand-blue">
          Planes de asesoría
        </h2>

        <p className="text-center text-brand-gold mt-4">
          Selecciona el plan que mejor se adapte a tu negocio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {/* Plan Básico */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">Básico</h3>

            <p className="text-2xl md:text-4xl font-bold mt-4 text-brand-black break-words">
            Próximamente
            </p>

            <ul className="mt-6 text-gray-600 space-y-2">
              <li>Consulta legal</li>
              <li>Revisión básica</li>
              <li>Recomendaciones</li>
            </ul>

            <Link
            to="/contacto?plan=basico"
            className="mt-8 inline-block bg-brand-blueLigth text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
            Contratar
            </Link>
          </div>

          {/* Plan Estándar */}
            <div className="bg-brand-blueLight p-8 md:p-10 rounded-2xl shadow-xl border-2 border-brand-blueNavy text-center relative md:scale-105">

            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-blue text-xs px-4 py-1 rounded-full">
                Más popular
            </span>

            <h3 className="text-xl font-semibold text-brand-black">Estándar</h3>

            <p className="text-2xl md:text-4xl font-bold mt-4 text-brand-light break-words">
              Próximamente
            </p>

            <ul className="mt-6 space-y-2 text-brand-light">
                <li>Asesoría completa</li>
                <li>Documentación</li>
                <li>Seguimiento</li>
            </ul>

            <Link
            to="/contacto?plan=basico"
            className="mt-8 inline-block bg-brand-gold text-brand-blueNavy px-6 py-3 rounded-md hover:opacity-90 transition"
            >
            Contratar
            </Link>

            </div>  

          {/* Plan Premium */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">Premium</h3>

            <p className="text-2xl md:text-4xl font-bold mt-4 text-brand-black break-words">
              Próximamente
            </p>

            <ul className="mt-6 text-gray-600 space-y-2">
              <li>Asesoría completa</li>
              <li>Documentos personalizados</li>
              <li>Soporte prioritario</li>
            </ul>

            <Link
            to="/contacto?plan=basico"
            className="mt-8 inline-block bg-brand-blueLigth text-brand-light px-6 py-3 rounded-md hover:opacity-90 transition"
            >
            Contratar
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Pricing