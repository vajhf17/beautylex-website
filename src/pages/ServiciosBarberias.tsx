import { Link } from "react-router-dom"
import barber from "../assets/barber.jpeg"
import ss3 from "../assets/ss3.jpeg"

function ServiciosBarberias() {
  return (
    <main>

      {/* HERO */}
      <section
        className="relative h-[80vh] flex items-end text-white bg-cover bg-[center_10%]"
        style={{
          backgroundImage: `url(${barber})`,
        }}
      >
      <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-3xl">

          <h1 className="text-4xl md:text-7xl font-bold leading-[0.95]">
            Servicios para
            <br />
            Barberías
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-gray-200">
            Ayudamos a barberías modernas y tradicionales a cumplir la normativa y proteger su negocio frente a riesgos legales.
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
          Muchas barberías trabajan sin protección legal adecuada
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Las barberías también deben cumplir obligaciones laborales, fiscales y legales. No contar con asesoramiento especializado puede generar sanciones, conflictos laborales o problemas administrativos.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Asesoramiento legal pensado para barberías
            </h3>

            <p className="mt-6 text-gray-600">
              Ofrecemos soluciones jurídicas claras y adaptadas a las necesidades reales de barberías, autónomos y negocios del sector masculino.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Contratos y gestión laboral</li>
              <li>✔ Protección de datos de clientes</li>
              <li>✔ Asesoramiento fiscal</li>
              <li>✔ Defensa ante inspecciones y reclamaciones</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ss3}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Peluquería"
            />
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Servicios para barberías
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Asesoría laboral
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Gestión de empleados, contratos, nóminas y cumplimiento del convenio laboral.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Gestión laboral, fiscal y contable
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Control fiscal y contable adaptado a barberías y profesionales autónomos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Defensa jurídica
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Protección legal frente a sanciones, inspecciones y conflictos legales.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Tu barbería merece trabajar con seguridad
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Nos encargamos de la parte legal para que tú puedas enfocarte en tus clientes y en hacer crecer tu marca.
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

export default ServiciosBarberias

