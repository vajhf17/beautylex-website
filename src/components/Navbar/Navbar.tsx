import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logovector.svg"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-brand-light/95 backdrop-blur-md border-b border-black/5">
  <div className="w-full flex items-center justify-between px-6 md:px-14 py-3">

    {/* LOGO */}
    <Link to="/">
      <img
        src={logo}
        alt="Beauty Lex"
        className="h-16 md:h-12 w-auto"
      />
    </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-10 text-[13px] text-brand-blueNavy uppercase tracking-[0.15em] font-medium">
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
                to="/servicios/peluquerias"
                className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
              >
                Peluquerias
              </Link>

               <Link
                to="/servicios/barberias"
                className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
              >
                Barberias
              </Link>

               <Link
                to="/servicios/centrosestetica"
                className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
              >
                Centros de Estética
              </Link>

               <Link
                to="/servicios/nails"
                className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
              >
                Nails Studios
              </Link>

              <Link
                to="/servicios/autonomos"
                className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
              >
                Autónomos y pymes
              </Link>

               <Link
                to="/servicios/traspasos"
                className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100"
              >
                Gestión de Traspasos
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
  <div className="fixed inset-0 bg-brand-light z-40 md:hidden overflow-y-auto">

    <div className="pt-32 pb-16 px-8 flex flex-col">

      {/* LINKS PRINCIPALES */}
      <div className="flex flex-col gap-8">

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-3xl font-bold text-brand-blueNavy"
        >
          Inicio
        </Link>

        {/* SERVICIOS */}
        <div>

          <p className="text-3xl font-bold text-brand-blueNavy">
            Servicios
          </p>

          <div className="mt-6 flex flex-col gap-4 pl-2 border-l-2 border-brand-gold/30">

            <Link
              to="/servicios"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-brand-gold transition"
            >
              Todos los servicios
            </Link>

            <Link
              to="/servicios/peluquerias"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-brand-gold transition"
            >
              Peluquerías
            </Link>

            <Link
              to="/servicios/barberias"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-brand-gold transition"
            >
              Barberías
            </Link>

            <Link
              to="/servicios/centrosestetica"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-brand-gold transition"
            >
              Centros estéticos
            </Link>

            <Link
              to="/servicios/autonomos"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-brand-gold transition"
            >
              Autónomos y pymes
            </Link>

            <Link
              to="/servicios/nails"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-brand-gold transition"
            >
              Nails
            </Link>

            <Link
              to="/servicios/traspasos"
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-brand-gold transition"
            >
              Traspasos
            </Link>

          </div>

        </div>

        <Link
          to="/equipo"
          onClick={() => setOpen(false)}
          className="text-3xl font-bold text-brand-blueNavy"
        >
          Equipo
        </Link>

        <Link
          to="/news"
          onClick={() => setOpen(false)}
          className="text-3xl font-bold text-brand-blueNavy"
        >
          News
        </Link>

      </div>

      {/* CTA */}
      <Link
        to="/contacto"
        onClick={() => setOpen(false)}
        className="mt-14 bg-brand-gold text-white px-8 py-4 rounded-full text-center text-lg font-medium hover:opacity-90 transition"
      >
        Contactar
      </Link>

    </div>

  </div>
)}
      </div>
    </nav>
  )
}

export default Navbar