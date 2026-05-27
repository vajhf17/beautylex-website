import { Link } from "react-router-dom"
import logo from "../../assets/logocircular.png"

function Footer() {
  return (
    <footer className="bg-brand-blueNavy text-white pt-24 pb-10 px-6 md:px-10 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* BRAND */}
          <div className="md:col-span-2">

            <img
              src={logo}
              alt="BeautyLex"
              className="w-20 h-20 object-contain"
            />

            <h3 className="mt-6 text-3xl font-bold">
              BeautyLex
            </h3>

            <p className="mt-6 max-w-md text-brand-light/70 leading-relaxed">
              Boutique jurídica especializada en el sector beauty y bienestar,
              enfocada en acompañar a profesionales y negocios con soluciones legales modernas y cercanas.
            </p>

          </div>

          {/* NAVEGACIÓN */}
          <div>

            <h4 className="text-lg font-semibold text-brand-gold">
              Navegación
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-brand-light/70">

              <Link
                to="/"
                className="hover:text-brand-gold transition"
              >
                Inicio
              </Link>

              <Link
                to="/servicios"
                className="hover:text-brand-gold transition"
              >
                Servicios
              </Link>

              <Link
                to="/equipo"
                className="hover:text-brand-gold transition"
              >
                Equipo
              </Link>

              <Link
                to="/news"
                className="hover:text-brand-gold transition"
              >
                News
              </Link>

              <Link
                to="/contacto"
                className="hover:text-brand-gold transition"
              >
                Contacto
              </Link>

            </div>

          </div>

          {/* CONTACTO */}
          <div>

            <h4 className="text-lg font-semibold text-brand-gold">
              Contacto
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-brand-light/70">

              <p>
                Barcelona, España
              </p>

              <a
                href="mailto:info@beautylex.com"
                className="hover:text-brand-gold transition"
              >
                info@beautylex.com
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-gold transition"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/10 my-12"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEGAL */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-brand-light/60">

            <Link
              to="/aviso-legal"
              className="hover:text-brand-gold transition"
            >
              Aviso legal
            </Link>

            <Link
              to="/privacidad"
              className="hover:text-brand-gold transition"
            >
              Política de privacidad
            </Link>

            <Link
              to="/cookies"
              className="hover:text-brand-gold transition"
            >
              Cookies
            </Link>

          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-brand-light/50 text-center md:text-right">
            © {new Date().getFullYear()} BeautyLex · Todos los derechos reservados.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer