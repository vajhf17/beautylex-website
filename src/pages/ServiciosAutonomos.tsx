import { Link } from "react-router-dom"
import autonomo from "../assets/autonomo.jpeg"
import ss6 from "../assets/ss6.jpeg"

function ServiciosAutonomos() {
  return (
    <main>

      {/* HERO */}
<section
  className="relative h-[80vh] flex items-end text-white bg-cover bg-[center_10%]"
  style={{
    backgroundImage: `url(${autonomo})`,
  }}
>

  <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

  <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-3xl">

    <h1 className="text-4xl md:text-7xl font-bold leading-[0.95]">
      Autónomos y
      <br />
      pymes
    </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-gray-200">
            Asesoramiento legal, fiscal y estratégico para profesionales independientes, pequeños negocios y marcas del sector belleza y bienestar.
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
          Trabajar como autónomo implica muchas responsabilidades legales. Asimismo, gestionar un negocio beauty implica responsabilidades legales constantes.
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Muchos autónomos y pequeñas empresas desconocen sus obligaciones fiscales, laborales o legales hasta que aparece una inspección, reclamación o sanción inesperada.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Asesoramiento legal para autónomos y pequeñas empresas beauty
            </h3>

            <p className="mt-6 text-gray-600">
              Ayudamos a profesionales independientes y pymes del sector beauty a desarrollar su actividad de forma segura, profesional y legalmente protegida.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Alta y gestión de autónomos y pymes</li>
              <li>✔ Contratos y colaboraciones</li>
              <li>✔ Protección de datos</li>
              <li>✔ Defensa jurídica y asesoramiento continuo</li>
              <li>✔ Fiscalidad y obligaciones tributarias</li>
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
          Servicios para autónomos y pymes beauty
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Gestión fiscal, laboral y contable
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
             Asesoramiento fiscal especializado, declaraciones, contabilidad y control de obligaciones tributarias.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección jurídica
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Contratos, reclamaciones, colaboraciones y respaldo legal para proteger tu actividad o negocio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección digital y normativa
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Adaptación legal para protección de datos, redes sociales, clientes y comunicación online.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Dedícate a tu talento. Haz crecer tu negocio beauty con tranquilidad. Nosotros protegemos tu negocio.
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

