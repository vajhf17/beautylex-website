import { Link } from "react-router-dom"
import nails from "../assets/nails.jpeg"
import ss5 from "../assets/ss5.jpeg"

function ServiciosNails() {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section
        className="relative h-[65vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${nails})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Tu Nail Estudio 100% protegido
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-gray-200">
            Ayudamos a estudios de uñas y profesionales nails a trabajar de forma legal, segura y profesional.
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
          Muchos nails studios trabajan sin respaldo legal
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Desde redes sociales hasta fiscalidad, contratos o protección de datos, los estudios de uñas necesitan cumplir obligaciones legales para evitar problemas futuros.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Protección legal para tu estudio de uñas
            </h3>

            <p className="mt-6 text-gray-600">
              En Beauty Lex ayudamos a profesionales nails a organizar y proteger legalmente su actividad profesional
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Alta y gestión de autónomos</li>
              <li>✔ Protección de datos de clientes</li>
              <li>✔ Contratos y colaboraciones</li>
              <li>✔ Gestión fiscal y legalidad digital</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ss5}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Peluquería"
            />
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Servicios para nails studios
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Asesoría fiscal
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Declaraciones, facturación y obligaciones fiscales adaptadas al sector beauty.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Legalidad digital
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Protección legal para Instagram, WhatsApp Business y sorteos en redes sociales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Protección jurídica
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Contratos, reclamaciones y respaldo legal para tu negocio.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Convierte tu talento en un negocio protegido
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Te ayudamos a profesionalizar tu estudio de uñas con seguridad jurídica y tranquilidad.
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

export default ServiciosNails






