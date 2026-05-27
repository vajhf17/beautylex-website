import { useState } from "react"

function Contacto() {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    if (
      !form.nombre ||
      !form.email ||
      !form.mensaje
    ) {

      setSuccess(
        "Por favor completa todos los campos"
      )

      return
    }

    try {

      setLoading(true)

      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      )

      const data = await response.json()

      if (data.success) {

        setSuccess(
          "Mensaje enviado correctamente"
        )

        setForm({
          nombre: "",
          email: "",
          mensaje: "",
        })
      }

    } catch (error) {

      console.log(error)

      setSuccess(
        "Error enviando mensaje"
      )

    } finally {

      setLoading(false)
    }
  }

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold text-[#2F2F2F]">
          Hablemos de tu negocio
        </h1>

        <p className="mt-4 text-gray-600">
          Escríbenos y te responderemos en menos de 24h.
        </p>

      </div>

      {/* Contenido */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-sm space-y-6"
        >

          <div>

            <label className="block text-sm mb-2 text-gray-700">
              Nombre
            </label>

            <input
              required
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />

          </div>

          <div>

            <label className="block text-sm mb-2 text-gray-700">
              Email
            </label>

            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />

          </div>

          <div>

            <label className="block text-sm mb-2 text-gray-700">
              Mensaje
            </label>

            <textarea
              required
              rows={5}
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos en qué podemos ayudarte"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-gold text-white py-3 rounded-md hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {success && (
            <p className="text-sm text-center text-brand-blueNavy">
              {success}
            </p>
          )}

        </form>

        {/* INFO + MAPA */}
        <div className="space-y-8">

          {/* Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">

            <div>
              <h3 className="font-semibold text-[#2F2F2F]">
                Email
              </h3>

              <p className="text-gray-600">
                info@beautylex.es
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2F2F2F]">
                Teléfono
              </h3>

              <p className="text-gray-600">
                +34 625 71 93 68
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#2F2F2F]">
                Dirección
              </h3>

              <p className="text-gray-600">
                Calle Aragó 116, local, CP 08015 Barcelona
              </p>
            </div>

          </div>

          {/* MAPA */}
          <div className="rounded-xl overflow-hidden shadow-sm">

            <iframe
              src="https://www.google.com/maps?q=Calle+Aragó+116+Barcelona&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contacto
