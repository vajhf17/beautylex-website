import { Link } from "react-router-dom"
import estetica from "../assets/estetica.jpeg"
import ss4 from "../assets/ss4.jpeg"

function ServiciosCentrosEstetica() {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section
        className="relative h-[65vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${estetica})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Servicios enfocados en Centros de Estética
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-gray-200">
            Protegemos tu centro de estética con soluciones legales especializadas para que trabajes con tranquilidad y seguridad.
          </p>

          <Link
            to="/contacto"
            className="inline-block mt-6 bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
          Los centros de estética están expuestos a riesgos legales constantes
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Tratamientos estéticos, protección de datos, reclamaciones de clientes, inspecciones y normativa sanitaria forman parte del día a día del sector. Un pequeño error puede convertirse en un gran problema legal.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Asesoramiento legal especializado para centros estéticos
            </h3>

            <p className="mt-6 text-gray-600">
              Ayudamos a centros de estética a cumplir la normativa vigente y proteger su negocio frente a riesgos laborales, fiscales y jurídicos.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Protección de datos y consentimientos</li>
              <li>✔ Defensa jurídica y reclamaciones</li>
              <li>✔ Gestión laboral y contratos</li>
              <li>✔ Cumplimiento normativo del sector beauty</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ss4}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Peluquería"
            />
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Servicios para centros de estética
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección legal
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Asesoramiento jurídico frente a reclamaciones, inspecciones y conflictos legales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección de datos
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Adaptación RGPD, consentimientos informados y tratamiento seguro de datos de clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Gestión laboral y fiscal
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Contratos, nóminas, fiscalidad y gestión administrativa especializada.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Tu centro estético merece trabajar protegido
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Nos encargamos del área legal para que tú puedas enfocarte en tus clientes y en hacer crecer tu negocio.
        </p>

        <Link
          to="/contacto"
          className="inline-block mt-6 bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Contactar ahora
        </Link>
      </section>

    </main>
  )
}

export default ServiciosCentrosEstetica



