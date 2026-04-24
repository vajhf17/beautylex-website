function ServiciosJuridicos() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-brand-gold mb-4">
          Servicios Jurídicos
        </p>

        <h1 className="text-5xl font-bold text-[#2F2F2F] leading-tight">
          Asesoramiento legal especializado para negocios del sector beauty
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">
            Apertura de negocio
          </h2>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✔ Lorem ipsum dolor sit amet</li>
            <li>✔ Consectetur adipiscing elit</li>
            <li>✔ Sed do eiusmod tempor</li>
            <li>✔ Ut labore et dolore magna</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">
            Protección frente a inspecciones
          </h2>

          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✔ Lorem ipsum dolor sit amet</li>
            <li>✔ Consectetur adipiscing elit</li>
            <li>✔ Sed do eiusmod tempor</li>
            <li>✔ Ut labore et dolore magna</li>
          </ul>
        </div>

      </div>

      <div className="mt-16 bg-[#F1EFE7] rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesitas ayuda jurídica?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <a
          href="/contacto"
          className="inline-block mt-8 bg-brand-gold text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
        >
          Solicitar información
        </a>
      </div>

    </section>
  )
}

export default ServiciosJuridicos