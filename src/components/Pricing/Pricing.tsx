import { Link } from "react-router-dom"

function Pricing() {
  return (
    <section className="py-28 px-6 bg-brand-light">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
            BeautyLex
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-blueNavy leading-tight">
            Planes de asesoría
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Próximamente podrás consultar nuestros planes
            de acompañamiento jurídico para el sector beauty.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* CARD */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

            <span className="uppercase tracking-[0.2em] text-xs text-brand-gold">
              BeautyLex
            </span>

            <h3 className="mt-6 text-3xl font-bold text-brand-blueNavy">
              Básico
            </h3>

            <div className="mt-10 h-px bg-gray-100"></div>

            <p className="mt-10 text-gray-500 leading-relaxed">
              Información disponible próximamente.
            </p>

            <Link
              to="/contacto"
              className="mt-12 inline-flex w-full justify-center bg-brand-blueNavy text-white px-6 py-4 rounded-full font-medium hover:opacity-90 transition"
            >
              Contactar
            </Link>

          </div>

          {/* CARD DESTACADA */}
          <div className="relative bg-brand-blueNavy rounded-3xl p-10 shadow-2xl text-white md:-translate-y-6">

            <div className="absolute top-6 right-6 bg-brand-gold text-brand-blueNavy text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-[0.15em]">
              Próximamente
            </div>

            <span className="uppercase tracking-[0.2em] text-xs text-brand-gold">
              BeautyLex
            </span>

            <h3 className="mt-6 text-3xl font-bold">
              Profesional
            </h3>

            <div className="mt-10 h-px bg-white/10"></div>

            <p className="mt-10 text-gray-300 leading-relaxed">
              Próximamente podrás consultar toda la información.
            </p>

            <Link
              to="/contacto"
              className="mt-12 inline-flex w-full justify-center bg-brand-gold text-brand-blueNavy px-6 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Contactar
            </Link>

          </div>

          {/* CARD */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

            <span className="uppercase tracking-[0.2em] text-xs text-brand-gold">
              BeautyLex
            </span>

            <h3 className="mt-6 text-3xl font-bold text-brand-blueNavy">
              Premium
            </h3>

            <div className="mt-10 h-px bg-gray-100"></div>

            <p className="mt-10 text-gray-500 leading-relaxed">
              Información disponible próximamente.
            </p>

            <Link
              to="/contacto"
              className="mt-12 inline-flex w-full justify-center bg-brand-blueNavy text-white px-6 py-4 rounded-full font-medium hover:opacity-90 transition"
            >
              Contactar
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Pricing