import { Link } from "react-router-dom"
import autonomo from "../assets/autonomo.jpeg"
import ss6 from "../assets/ss6.jpeg"

function ServiciosAutonomos() {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section
        className="relative h-[65vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${autonomo})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Autónomos del sector Beauty o Wellness
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-gray-200">
            Protección legal y fiscal para profesionales independientes del sector belleza y bienestar.
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
          Trabajar como autónomo implica muchas responsabilidades legales
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Muchos profesionales desconocen sus obligaciones fiscales, laborales y legales hasta que aparece una sanción o una inspección.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Acompañamiento legal para profesionales independientes
            </h3>

            <p className="mt-6 text-gray-600">
              Ayudamos a autónomos del sector beauty a desarrollar su actividad de forma segura y profesional.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Alta de autónomos y fiscalidad</li>
              <li>✔ Contratos y colaboraciones</li>
              <li>✔ Protección de datos</li>
              <li>✔ Defensa jurídica y asesoramiento continuo</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ss6}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Peluquería"
            />
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Servicios para autónomos
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Gestión fiscal
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              IVA, IRPF, declaraciones trimestrales y asesoramiento fiscal especializado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección legal
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Contratos, reclamaciones y protección jurídica para tu actividad profesional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección digital
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Adaptación legal para redes sociales, clientes y comunicación online.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Dedícate a tu talento. Nosotros protegemos tu negocio.
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Te ayudamos a crecer con tranquilidad, evitando errores legales que puedan afectar tu actividad.
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

export default ServiciosAutonomos

