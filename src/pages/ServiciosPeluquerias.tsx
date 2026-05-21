import { Link } from "react-router-dom"
import peluImg from "../assets/peluqueria.jpg"
import ss2 from "../assets/ss2.jpeg"

function ServiciosPeluquerias() {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section
        className="relative h-[65vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${peluImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Servicios para Peluquerias
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-gray-200">
            Protegemos tu salón frente a sanciones, inspecciones y problemas legales para que puedas centrarte en hacer crecer tu negocio con tranquilidad.
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
          Tu peluquería necesita más que una gestoría tradicional
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Las peluquerías manejan empleados, datos personales, contratos, redes sociales y normativa específica del sector. Muchos negocios trabajan sin protección legal adecuada hasta que aparece una inspección, una reclamación o una sanción inesperada.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Soluciones legales adaptadas al sector de la peluquería
            </h3>

            <p className="mt-6 text-gray-600">
              En Beauty Lex ayudamos a peluquerías y salones de belleza a cumplir con todas sus obligaciones legales, laborales y fiscales mediante un asesoramiento especializado y personalizado.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Asesoramiento jurídico especializado en peluquerías</li>
              <li>✔ Gestión laboral y contratos</li>
              <li>✔ Protección de datos y RGPD</li>
              <li>✔ Defensa jurídica ante inspecciones y sanciones</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ss2}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Peluquería"
            />
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Lorem ipsum dolor sit amet
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Gestión laboral
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Contratos, nóminas, convenios, despidos y asesoramiento laboral adaptado al sector beauty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección legal
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Defensa jurídica, reclamaciones, inspecciones y prevención de riesgos legales para tu salón.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Fiscal y compliance
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
             Gestión fiscal, cumplimiento normativo y protección de datos para trabajar con tranquilidad.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Protege tu peluquería antes de que llegue el problema
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Te ayudamos a evitar sanciones y a mantener tu negocio seguro, actualizado y legalmente protegido.
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

export default ServiciosPeluquerias




