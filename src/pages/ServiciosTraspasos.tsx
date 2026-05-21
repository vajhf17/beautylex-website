import { Link } from "react-router-dom"
import traspaso from "../assets/traspaso.jpeg"
import ss7 from "../assets/ss7.jpeg"

function ServiciosTraspasos() {
  return (
    <main className="pt-20">

      {/* HERO */}
      <section
        className="relative h-[65vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${traspaso})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-brand-blueNavy/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Gestión de Traspasos
          </h1>

          <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-gray-200">
            Te acompañamos en la compra, venta o traspaso de negocios del sector belleza y bienestar con seguridad jurídica.
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
          Un traspaso mal gestionado puede generar grandes problemas
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Muchos negocios realizan traspasos sin revisar contratos, obligaciones o riesgos legales, lo que puede derivar en conflictos futuros o pérdidas económicas.
        </p>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-brand-cream py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy">
              Traspasos seguros y bien gestionados
            </h3>

            <p className="mt-6 text-gray-600">
              Ofrecemos asesoramiento integral para garantizar que cada operación se realice con transparencia, seguridad y respaldo legal.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Revisión de contratos y documentación</li>
              <li>✔ Asesoramiento en compra y venta</li>
              <li>✔ Protección jurídica de ambas partes</li>
              <li>✔ Acompañamiento durante todo el proceso</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ss7}
              className="w-full h-[300px] md:h-[400px] object-cover"
              alt="Peluquería"
            />
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-brand-blueNavy text-center">
          Servicios de traspaso de negocios
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Revisión legal
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Análisis de contratos, licencias y situación legal del negocio antes del traspaso.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Negociación y contratos
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Redacción y supervisión de acuerdos para proteger tus intereses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h4 className="font-semibold text-lg text-brand-blueNavy">
              Acompañamiento integral
            </h4>
            <p className="mt-3 text-gray-600 text-sm">
              Asesoramiento durante todo el proceso de compra, venta o cesión del negocio.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE DESTACADO */}
      <section className="bg-brand-blueNavy text-white py-16 md:py-24 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Haz tu traspaso con tranquilidad y seguridad
        </h3>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Protegemos cada detalle legal para evitar riesgos y garantizar una operación segura.
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

export default ServiciosTraspasos

