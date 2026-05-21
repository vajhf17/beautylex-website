import { InstagramEmbed } from "react-social-media-embed"

function News() {
  return (
    <section className="py-28 px-6 bg-brand-light overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-sm text-brand-gold">
            BeautyLex
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-brand-blueNavy leading-tight">
            Presencia en el sector
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Eventos, ponencias y actualidad jurídica
            dentro del sector beauty y bienestar.
          </p>

        </div>

        {/* FEED */}
        <div className="flex gap-6 overflow-x-auto pb-4 mt-20 scrollbar-hide">

          {/* POST 1 */}
          <div className="min-w-[340px] bg-white rounded-[32px] p-4 shadow-sm hover:shadow-xl transition overflow-hidden">

            <InstagramEmbed
              url="https://www.instagram.com/reel/DYZCd8GNyQv/"
              width="100%"
            />

          </div>

          {/* POST 2 */}
          <div className="min-w-[340px] bg-white rounded-[32px] p-4 shadow-sm hover:shadow-xl transition overflow-hidden">

            <InstagramEmbed
              url="https://www.instagram.com/reel/DYRXhJmNsnz/"
              width="100%"
            />

          </div>

          {/* POST 3 */}
          <div className="min-w-[340px] bg-white rounded-[32px] p-4 shadow-sm hover:shadow-xl transition overflow-hidden">

            <InstagramEmbed
              url="https://www.instagram.com/p/DYJpEwEDFtq/"
              width="100%"
            />

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-brand-blueNavy text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
          >
            Ver Instagram
          </a>

        </div>

      </div>

    </section>
  )
}

export default News