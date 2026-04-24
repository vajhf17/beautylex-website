function Sector() {
  return (
    <section className="py-24 px-10">

      <h2 className="text-3xl font-bold text-center">
        A quién ayudamos
      </h2>

      <p className="text-center text-gray-600 mt-4">
        Beauty Lex acompaña a profesionales y negocios del sector
        belleza y bienestar en su desarrollo empresarial.
      </p>

      <div className="grid grid-cols-4 gap-8 mt-16 text-center">

        <div className="p-6 border rounded-lg">
          Estilistas
        </div>

        <div className="p-6 border rounded-lg">
          Clínicas estéticas
        </div>

        <div className="p-6 border rounded-lg">
          Centros wellness
        </div>

        <div className="p-6 border rounded-lg">
          Profesionales autónomos
        </div>

      </div>

    </section>
  )
}

export default Sector