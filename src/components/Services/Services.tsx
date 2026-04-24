import { Scale, FileText, Briefcase } from "lucide-react"
import Pricing from "../Pricing/Pricing";

function Services() {
  return (
    <main>

      <section className="pt-40 pb-24 px-10 bg-white relative z-10">

        <h2 className="text-3xl font-bold text-center">
          Nuestros Servicios
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Asesoramiento legal y administrativo especializado
          en el sector belleza y bienestar.
        </p>

        {/* GRID SERVICIOS */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <Scale className="mx-auto mb-4 text-brand-gold" size={32} />
            <h3 className="text-xl font-semibold">Asesoría jurídica</h3>
            <p className="text-gray-600 mt-3">
              Asesoramiento legal especializado para profesionales del sector beauty.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <FileText className="mx-auto mb-4 text-brand-gold" size={32} />
            <h3 className="text-xl font-semibold">Gestión administrativa</h3>
            <p className="text-gray-600 mt-3">
              Trámites administrativos y gestión documental para negocios de belleza.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <Briefcase className="mx-auto mb-4 text-brand-gold" size={32} />
            <h3 className="text-xl font-semibold">Traspasos de negocios</h3>
            <p className="text-gray-600 mt-3">
              Acompañamiento legal en la compra o venta de centros de estética.
            </p>
          </div>

        </div>

      </section>

      {/* SECCIÓN PLANES DE PAGO */}
      <Pricing />

    </main>
  )
}

export default Services