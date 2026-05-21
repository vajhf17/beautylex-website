function WhyChooseUs() {
  return (
    <section className="py-28 px-6 bg-brand-light">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
            BeautyLex
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-blueNavy leading-tight">
            Por qué elegirnos
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Boutique jurídica especializada en el sector beauty,
            enfocada en proteger negocios y profesionales con soluciones legales claras.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* CARD */}
          <div className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-brand-gold/20">

            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-2xl text-brand-gold">
              ✦
            </div>

            <h3 className="mt-8 text-2xl font-bold text-brand-blueNavy">
              Especialización beauty
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Conocemos la normativa y las necesidades reales
              de peluquerías, barberías y centros estéticos.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-brand-blueNavy rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition duration-300 text-white">

            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-brand-gold">
              ⚖
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Seguridad jurídica
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Protegemos tu negocio frente a riesgos legales,
              conflictos y problemas administrativos.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-brand-gold/20">

            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-2xl text-brand-gold">
              ✦
            </div>

            <h3 className="mt-8 text-2xl font-bold text-brand-blueNavy">
              Acompañamiento cercano
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Trabajamos de forma cercana y personalizada
              en cada etapa del crecimiento de tu negocio.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs