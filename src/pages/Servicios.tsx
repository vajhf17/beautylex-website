import { Link } from "react-router-dom"
import Pricing from "../components/Pricing/Pricing"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

import hero1 from "../assets/evento1.jpeg"
import hero2 from "../assets/evento2.jpeg"
import hero3 from "../assets/evento3.jpeg"

function Servicios() {
  return (
    <main className="bg-brand-light text-brand-blueNavy overflow-hidden">

      {/* HERO CAROUSEL */}
      <section className="relative h-screen">

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >

          {/* SLIDE 1 */}
          <SwiperSlide>
            <div
              className="relative h-screen bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(${hero1})`,
              }}
            >

              <div className="absolute inset-0 bg-gradient-to-r from-brand-blueNavy/85 to-brand-blueNavy/40"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 w-full">
                <div className="max-w-2xl">

                  <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
                    BeautyLex
                  </span>

                  <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] text-white">
                    Asesoría jurídica para negocios beauty
                  </h1>

                  <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                   Asesoramiento jurídico, fiscal y contable especializado para negocios y profesionales del sector belleza y bienestar.
                  </p>

                  <div className="mt-10 flex gap-4 flex-wrap">

                    <Link
                      to="/contacto"
                      className="bg-brand-gold text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
                    >
                      Solicitar información
                    </Link>

                    <Link
                      to="/equipo"
                      className="border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white/10 transition"
                    >
                      Conocer al equipo
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div
              className="relative h-screen bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(${hero2})`,
              }}
            >

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 w-full">

                <div className="max-w-2xl">

                  <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
                    Eventos & ponencias
                  </span>

                  <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] text-white">
                    Presencia jurídica en el sector belleza
                  </h2>

                  <p className="mt-6 text-lg text-gray-200">
                   Participación activa en eventos, asociaciones, gremios y espacios profesionales del sector belleza y bienestar.
                  </p>

                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div
              className="relative h-screen bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(${hero3})`,
              }}
            >

              <div className="absolute inset-0 bg-brand-blueNavy/60"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 w-full">

                <div className="max-w-2xl">

                  <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
                    Traspasos
                  </span>

                  <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] text-white">
                    Seguridad legal en traspasos de negocio
                  </h2>

                  <p className="mt-6 text-lg text-gray-200">
                    Asesoramiento legal especializado para la compra, venta y traspaso seguro de negocios del sector beauty y wellness.
                  </p>

                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </section>

      {/* SERVICIOS */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
              Servicios
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Soluciones jurídicas para el sector beauty
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Haz crecer tu negocio beauty con la seguridad de estar legalmente protegido.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {/* CARD */}
            <div className="bg-white rounded-3xl p-10 shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold text-2xl">
                ⚖
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Asesoría jurídica y legal
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Asesoramiento jurídico especializado, defensa legal y cumplimiento normativo para negocios y profesionales del sector beauty.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-brand-blueNavy text-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gold text-2xl">
                ✦
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Traspasos de negocio
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Asesoramiento legal integral para la compra, venta y traspaso de negocios del sector belleza y bienestar.
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl p-10 shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300">

              <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold text-2xl">
                ✦
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Gestión y protección empresarial
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Protección de datos, gestión fiscal y contable, registro de marcas, seguros y soluciones legales para fortalecer tu negocio.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between gap-10 items-end">

            <div>
              <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
                Especialidades
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Sectores con los que trabajamos
              </h2>
            </div>

            <p className="max-w-xl text-gray-600">
              Trabajamos con autónomos, pymes y negocios del sector beauty que buscan crecer con seguridad jurídica, fiscal y empresarial.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">

            {[
              {
                title: "Peluquerías",
                link: "/servicios/peluquerias",
              },
              {
                title: "Barberías",
                link: "/servicios/barberias",
              },
              {
                title: "Centros estéticos",
                link: "/servicios/estetica",
              },
              {
                title: "Autónomos y pymes",
                link: "/servicios/autonomos",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-brand-light rounded-3xl p-10 hover:bg-brand-blueNavy transition duration-300 flex flex-col justify-between min-h-[260px]"
              >

                <div>

                  <h3 className="text-2xl font-bold group-hover:text-white transition">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 group-hover:text-gray-300 transition">
                   Servicios jurídicos, fiscales y legales adaptados a cada actividad beauty.
                  </p>

                </div>

                <Link
                  to={item.link}
                  className="mt-10 inline-flex items-center justify-center bg-brand-gold text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
                >
                  Ver servicio
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
            Planes
          </span>

          <div className="mt-30">
            <Pricing />
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-28">

        <div className="max-w-7xl mx-auto bg-brand-blueNavy rounded-[40px] p-14 md:p-20 text-center text-white">

          <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
            BeautyLex
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Protege legalmente tu negocio beauty
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
           Te ayudamos con la gestión jurídica, fiscal y contable de tu negocio beauty para que trabajes con seguridad y tranquilidad.
          </p>

          <Link
            to="/contacto"
            className="inline-block mt-10 bg-brand-gold px-10 py-4 rounded-full text-white font-medium hover:opacity-90 transition"
          >
            Contactar ahora
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Servicios