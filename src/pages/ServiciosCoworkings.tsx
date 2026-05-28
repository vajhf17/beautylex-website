import { Link } from "react-router-dom"
import nails from "../assets/nails.jpeg"
import ss5 from "../assets/ss5.jpeg"

function ServiciosGremios() {
  return (
    <main>

      {/* HERO */}
      <section
        className="relative h-[80vh] flex items-end text-white bg-cover bg-[center_20%]"
        style={{
          backgroundImage: `url(${nails})`,
        }}
      >

        <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-3xl">

          <h1 className="text-4xl md:text-7xl font-bold leading-[0.95]">
            Colectivos, gremios y entidades
            <br />
            del sector beauty
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
            Asesoramiento jurídico, fiscal y contable para colectivos profesionales, gremios, coworkings beauty, academias, asociaciones y entidades del sector belleza y bienestar.
          </p>

          <Link
            to="/contacto"
            className="inline-flex mt-8 bg-brand-gold text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
          >
            Contactar
          </Link>

        </div>

      </section>

      {/* PROBLEMA */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
          Las entidades y colectivos del sector beauty también necesitan protección legal especializada
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Coworkings beauty, academias, asociaciones y gremios profesionales gestionan contratos, profesionales independientes, protección de datos, fiscalidad y normativa laboral. Sin un asesoramiento especializado, pueden aparecer riesgos legales, sanciones o conflictos administrativos.
        </p>

      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Asesoramiento integral para colectivos y entidades profesionales
            </h3>

            <p className="mt-6 text-gray-600">
              En Beauty Lex ayudamos a coworkings beauty, asociaciones, academias y gremios a organizar y proteger legalmente su actividad mediante soluciones jurídicas, fiscales y contables adaptadas a las necesidades reales del sector.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Gestión fiscal, laboral y contable</li>
              <li>✔ Protección de datos y cumplimiento normativo</li>
              <li>✔ Contratos y acuerdos profesionales</li>
              <li>✔ Defensa jurídica y representación legal</li>
            </ul>

          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ss5}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Colectivos beauty"
            />
          </div>

        </div>

      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">

        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Servicios para colectivos y entidades del sector
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">

            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Gestión fiscal, laboral y contable
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Soluciones fiscales, laborales y contables adaptadas a gremios, academias, coworkings y entidades del sector beauty y wellness.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">

            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Asesoramiento jurídico y defensa legal
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Contratos, procedimientos judiciales, representación legal y asesoramiento jurídico especializado para entidades y colectivos profesionales.
            </p>

          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">

            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Servicios complementarios
            </h4>

            <p className="mt-3 text-gray-600 text-sm">
              Protección de datos, registro de marcas, seguros y soluciones legales para fortalecer y proteger tu organización.
            </p>

          </div>

        </div>

      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">

        <h3 className="text-2xl md:text-3xl font-bold">
          Impulsamos entidades beauty con seguridad jurídica
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Acompañamos a colectivos, asociaciones y entidades del sector belleza y bienestar con soluciones legales adaptadas a sus necesidades reales.
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

export default ServiciosGremios