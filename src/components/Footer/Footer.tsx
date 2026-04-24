function Footer() {
  return (
    <footer className="bg-brand-blueNavy text-white py-16 px-6 md:px-10 mt-24">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Beauty Lex</h3>

          <p className="text-base text-brand-ligth leading-relaxed">
            Boutique Legal especializada en el sector belleza y bienestar.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Enlaces</h4>

          <ul className="space-y-3 text-brand-ligth">
            <li className="hover:text-brand-gold transition cursor-pointer">
              Servicios
            </li>

            <li className="hover:text-brand-gold transition cursor-pointer">
              Equipo
            </li>

            <li className="hover:text-brand-gold transition cursor-pointer">
              Redes Sociales
            </li>

            <li className="hover:text-brand-gold transition cursor-pointer">
              Contacto
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Contacto</h4>

          <p className="text-brand-ligth">
            info@beautylex.com
          </p>

          <p className="text-brand-ligth">
            Barcelona, España.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-brand-ligth">
            <a href="/aviso-legal" className="hover:text-brand-gold transition">
              Aviso legal
            </a>

            <a href="/privacidad" className="hover:text-brand-gold transition">
              Privacidad
            </a>

            <a href="/cookies" className="hover:text-brand-gold transition">
              Cookies
            </a>
          </div>

          <div className="text-sm text-brand-gold text-center md:text-right">
            © {new Date().getFullYear()} Beauty Lex. Todos los derechos reservados.
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer