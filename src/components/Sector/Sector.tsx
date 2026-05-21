function Sector() {
  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
            Sectores
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-blueNavy leading-tight">
            A quién acompañamos
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Trabajamos junto a profesionales y negocios
            del sector beauty y bienestar.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* CARD */}
          <div className="group bg-brand-light rounded-[32px] p-10 hover:bg-brand-blueNavy transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold text-2xl">
              ✦
            </div>

            <h3 className="mt-8 text-3xl font-bold text-brand-blueNavy group-hover:text-white transition">
              Empresas y centros
            </h3>

            <div className="mt-6 space-y-3 text-gray-600 group-hover:text-gray-300 transition">

              <p>Peluquerías</p>
              <p>Barberías</p>
              <p>Clínicas estéticas</p>
              <p>Centros de estética</p>

            </div>

          </div>

          {/* CARD */}
          <div className="group bg-brand-blueNavy rounded-[32px] p-10 text-white shadow-2xl">

            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gold text-2xl">
              ⚖
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Profesionales independientes
            </h3>

            <div className="mt-6 space-y-3 text-gray-300">

              <p>Autónomos</p>
              <p>Freelancers</p>
              <p>Técnicos beauty</p>

            </div>

          </div>

          {/* CARD */}
          <div className="group bg-brand-light rounded-[32px] p-10 hover:bg-brand-blueNavy transition duration-300">

            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold text-2xl">
              ✦
            </div>

            <h3 className="mt-8 text-3xl font-bold text-brand-blueNavy group-hover:text-white transition">
              Especialistas beauty
            </h3>

            <div className="mt-6 space-y-3 text-gray-600 group-hover:text-gray-300 transition">

              <p>Nails</p>
              <p>Makeup artists</p>
              <p>Lashistas</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Sector