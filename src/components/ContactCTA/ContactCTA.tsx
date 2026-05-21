import { Link } from "react-router-dom"
import ctaImage from "../../assets/evento1.jpeg"

function ContactCTA() {
  return (
    <section className="px-6 pb-28">

      <div
        className="relative max-w-7xl mx-auto rounded-[40px] overflow-hidden min-h-[550px] flex items-center"
        style={{
          backgroundImage: `url(${ctaImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blueNavy/90 via-brand-blueNavy/70 to-black/30"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl px-10 md:px-20 py-20 text-white">

          <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
            BeautyLex
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Protege tu negocio con asesoramiento jurídico especializado
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Acompañamos a profesionales y negocios del sector beauty
            con soluciones jurídicas claras, cercanas y adaptadas a cada etapa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link
              to="/contacto"
              className="bg-brand-gold text-brand-blueNavy px-8 py-4 rounded-full font-semibold text-center hover:opacity-90 transition"
            >
              Agendar consulta
            </Link>

            <Link
              to="/servicios"
              className="border border-white/20 backdrop-blur-sm bg-white/5 px-8 py-4 rounded-full text-center hover:bg-white/10 transition"
            >
              Ver servicios
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactCTA