export default function Home() {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Cuidar é proteger
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Projeto social voltado à conscientização sobre os direitos da criança
          e do adolescente, com ações educativas e informativas na comunidade.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/direitos"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Conhecer direitos
          </a>

          <a
            href="/acoes"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Ver ações
          </a>
        </div>

      </div>
    </section>
  )
}
