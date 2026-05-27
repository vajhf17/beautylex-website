import { Link } from "react-router-dom"
import otrosImg from "../assets/otrosservicios.jpeg"
import jordi from "../assets/jm3.png"

function ServiciosOtros() {
  return (
    <main>

      {/* HERO */}
      <section
        className="relative h-[80vh] flex items-end text-white bg-cover bg-[center_20%]"
        style={{
          backgroundImage: `url(${otrosImg})`,
        }}
      >

        <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-3xl">

          <h1 className="text-4xl md:text-7xl font-bold leading-[0.95]">
            Otros servicios
            <br />
            especializados
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
            Soluciones legales complementarias para proteger y fortalecer tu negocio beauty de forma integral.
          </p>

          <Link
            to="/contacto"
            className="inline-flex mt-8 bg-brand-gold text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
          >
            Contactar
          </Link>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
          Áreas de especialización jurídica para negocios beauty
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          En Beauty Lex ofrecemos servicios estratégicos diseñados para reforzar la seguridad legal, operativa y empresarial de profesionales y negocios del sector belleza y bienestar.
        </p>

      </section>

      {/* SOLUCIONES */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Soluciones legales complementarias
            </h3>

            <p className="mt-6 text-gray-600">
              Ayudamos a profesionales y empresas beauty a proteger su actividad mediante servicios jurídicos especializados y adaptados a las necesidades reales del sector.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Protección de datos y RGPD</li>
              <li>✔ Procedimientos judiciales y defensa legal</li>
              <li>✔ Registro y protección de marcas</li>
              <li>✔ Asesoramiento en seguros profesionales</li>
            </ul>

          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={jordi}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Servicios legales"
            />
          </div>

        </div>

      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">

        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Servicios estratégicos para negocios beauty
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección de datos
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Adaptación RGPD, gestión de datos de clientes, consentimientos y cumplimiento normativo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Procedimientos judiciales
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Defensa y representación legal ante reclamaciones, conflictos e incidencias jurídicas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Registro de marcas
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Protección legal de nombres comerciales, marcas y proyectos del sector beauty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Seguros profesionales
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Asesoramiento en seguros y protección frente a riesgos profesionales y empresariales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Compliance normativo
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Cumplimiento legal, prevención de riesgos y adaptación normativa para negocios beauty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Contratos y documentación
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Redacción y revisión de contratos, acuerdos y documentación legal especializada.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">

        <h3 className="text-2xl md:text-3xl font-bold">
          Refuerza legalmente tu negocio beauty
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Te ayudamos a proteger tu marca, tu actividad y tu crecimiento con asesoramiento jurídico especializado.
        </p>

        <Link
          to="/contacto"
          className="inline-block mt-6 bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Solicitar información
        </Link>

      </section>

    </main>
  )
}

export default ServiciosOtros