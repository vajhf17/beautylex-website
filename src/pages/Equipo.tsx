import susanaImg from "../assets/susana1.png"
import jordiImg from "../assets/jordi1.png"

function Equipo() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm text-brand-blueLight mb-3">
          Equipo Beautylex
        </p>

        <h1 className="text-5xl font-bold text-brand-blue leading-tight">
          Experiencia legal especializada en el sector beauty
        </h1>

        <p className="mt-6 text-lg text-brand-gold">
          Un equipo que combina asesoría jurídica y estrategia empresarial
          para ayudarte a crecer con seguridad.
        </p>
      </div>

      {/* BLOQUE SUSANA */}
      <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* FOTO */}
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-gold/10 rounded-2xl"></div>

          <div className="relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden">
            <img
            src={susanaImg}
            alt="Susana Blasco Lebrero"
            className="w-full h-full object-cover object-[center_15%]"/>
          </div>
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-2xl font-bold">
            Susana Blasco Lebrero
          </h2>

          <p className="text-brand-gold text-sm mt-1">
            Abogada · Consultora · Máster en Derecho Digital
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Especialista en cumplimiento normativo y asesoría legal para negocios
            del sector belleza y bienestar en toda España. Su enfoque combina
            rigor jurídico con una visión práctica orientada a negocio.
          </p>

          {/* DESTACADOS */}
          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p>✔ Presidenta del Gremio de Peluquería y Estética de Mataró y Maresme</p>
            <p>✔ Colaboración con Federación Catalana de Peluquería y Estética</p>
            <p>✔ Ponente en CosmoExpoBeauty, Beauty Valencia, Golden Chair</p>
            <p>✔ Participación en medios y podcasts especializados</p>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Cumplimiento normativo</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Sector beauty</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Legal digital</span>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Idiomas: Español · Catalán · Inglés · Italiano
          </p>

          <a
            href="https://www.linkedin.com/in/susana-blasco-lebrero/"
            target="_blank"
            className="inline-block mt-4 text-sm text-brand-plum hover:underline"
          >
            Ver perfil en LinkedIn →
          </a>
        </div>

      </div>

      {/* BLOQUE JORDI */}
      <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* TEXTO */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-bold">
            Jordi Menescal Vázquez
          </h2>

          <p className="text-brand-gold text-sm mt-1">
            Economista · Gestor administrativo
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Especialista en gestión financiera y administrativa para empresas del
            sector beauty. Aporta una visión estratégica que ayuda a optimizar
            recursos y mejorar la rentabilidad.
          </p>

          {/* DESTACADOS */}
          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p>✔ Asesoramiento a peluquerías, centros estéticos y cosmética</p>
            <p>✔ Estrategia empresarial y optimización de procesos</p>
            <p>✔ Ponente en asociaciones y gremios</p>
            <p>✔ Reconocido por su impacto social e inclusión laboral</p>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Gestión financiera</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Estrategia</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Empresas beauty</span>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Idiomas: Español · Catalán
          </p>

          <a
            href="https://www.linkedin.com/in/jordi-menescal-v%C3%A1zquez-bba47148/"
            target="_blank"
            className="inline-block mt-4 text-sm text-brand-plum hover:underline"
          >
            Ver perfil en LinkedIn →
          </a>
        </div>

        {/* FOTO */}
        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-4 bg-brand-gold/10 rounded-2xl"></div>

          <div className="relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden">
          <img
          src={jordiImg}
          alt="Jordi Menescarl Vázquez"
          className="w-full h-full object-cover object-[center_15%]"/>
          </div>
        </div>

      </div>

      {/* BLOQUE CONFIANZA */}
      <div className="mt-28 bg-[#F1EFE7] p-12 rounded-2xl text-center">

        <h3 className="text-2xl font-bold mb-4 text-brand-blue" >
          Especialistas en el sector beauty en España
        </h3>

        <p className="text-gray-700 max-w-2xl mx-auto">
          Conocemos de primera mano las necesidades legales de peluquerías,
          centros de estética, tatuadores y profesionales del sector.
        </p>

      </div>

      {/* CTA FINAL */}
      <div className="mt-24 text-center">
        <h3 className="text-brand-blueNavy text-2xl font-semibold mb-4">
          ¿Hablamos?
        </h3>

        <p className="text-brand-black mb-6">
          Estamos aquí para ayudarte a crecer con seguridad jurídica.
        </p>

        <a
          href="/contacto"
          className="bg-brand-gold text-brand-light px-8 py-3 rounded-md hover:opacity-90 transition"
        >
          Contactar ahora
        </a>
      </div>

    </section>
  )
}

export default Equipo