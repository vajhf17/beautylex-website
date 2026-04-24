import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logocircular.png"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-light shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="Beauty Lex"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-brand-blueNavy uppercase tracking-[0.15em] font-medium">
          <li>
            <Link to="/" className="hover:text-brand-gold transition">
              Inicio
            </Link>
          </li>

          {/* SERVICIOS */}
          <li className="relative group">
            <Link
              to="/servicios"
              className="hover:text-brand-gold transition flex items-center gap-1"
            >
              Servicios
              <span className="text-xs">⌄</span>
            </Link>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white text-brand-blue rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              
              <Link
                to="/servicios/juridicos"
                className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
              >
                Servicios Jurídicos
              </Link>

              <Link
                to="/servicios/otros"
                className="block px-6 py-4 hover:bg-gray-50"
              >
                Otros Servicios
              </Link>

            </div>
          </li>

          <li>
            <Link to="/equipo" className="hover:text-brand-gold transition">
              Equipo
            </Link>
          </li>

          <li>
            <Link to="/news" className="hover:text-brand-gold transition">
              News
            </Link>
          </li>

          <li>
            <Link
              to="/contacto"
              className="bg-brand-gold text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-[60] p-2 rounded-full bg-brand-blueNavy text-white hover:bg-brand-blue transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* MENU MOBILE */}
        {open && (
          <div className="fixed inset-0 bg-brand-light z-40 flex flex-col items-center pt-28 pb-12 px-6 overflow-y-auto md:hidden">

            <div className="flex flex-col items-center gap-8 w-full">

              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-brand-blueNavy"
              >
                Inicio
              </Link>

              <div className="flex flex-col items-center">
                <Link
                  to="/servicios"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-brand-blueNavy"
                >
                  Servicios
                </Link>

                <div className="mt-4 flex flex-col items-center gap-3 text-sm text-gray-600">
                  <Link
                    to="/servicios/juridicos"
                    onClick={() => setOpen(false)}
                    className="hover:text-brand-gold transition"
                  >
                    Servicios Jurídicos
                  </Link>

                  <Link
                    to="/servicios/otros"
                    onClick={() => setOpen(false)}
                    className="hover:text-brand-gold transition"
                  >
                    Otros Servicios
                  </Link>
                </div>
              </div>

              <Link
                to="/equipo"
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-brand-blueNavy"
              >
                Equipo
              </Link>

              <Link
                to="/news"
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-brand-blueNavy"
              >
                News
              </Link>

              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="bg-brand-gold text-brand-light px-6 py-3 rounded-full text-lg font-medium"
              >
                Contacto
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar