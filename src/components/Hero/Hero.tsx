import { Link } from "react-router-dom"
import heroImage from "../../assets/bannercolor.png"

function Hero() {
  return (
    <section className="relative min-h-[90vh] md:h-[80vh] flex items-center mt-20 md:mt-24">
  <div className="h-20 md:h-24"></div>

      {/* imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-black [55%_40%] md:bg-black"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />

      {/* overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* contenido */}
      <div className="relative w-full max-w-3xl px-6 md:px-10 pt-36 md:pt-40 text-brand-gold">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Asesoría legal especializada
          <br className="hidden md:block" />
          en el sector belleza
        </h1>

        <p className="mt-4 md:mt-6 max-w-xl text-base md:text-lg text-brand-light leading-relaxed">
          Protegemos y acompañamos a profesionales y empresas
          del sector beauty y bienestar con soluciones legales claras.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-3 md:gap-4">

          <Link
  to="/contacto"
  className="bg-brand-blue text-brand-gold px-6 py-3 rounded-xl font-medium md:text-lg w-full md:w-auto text-center hover:opacity-90 transition"
>
  Pide tu cita
</Link>

<Link
  to="/servicios"
  className="border border-brand-light/40 backdrop-blur-sm bg-white/5 text-brand-light px-6 py-3 rounded-xl md:text-lg w-full md:w-auto text-center hover:bg-white/10 transition"
>
  Ver servicios
</Link>

        </div>

      </div>

    </section>
  )
}

export default Hero