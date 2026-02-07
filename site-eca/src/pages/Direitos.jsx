const direitos = [
  "Direito à vida e à saúde",
  "Direito à educação",
  "Direito ao respeito e dignidade",
  "Direito à convivência familiar",
  "Proteção contra violência e exploração"
]

export default function Direitos() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">

      <h1 className="text-3xl font-bold mb-8">
        Direitos da Criança e do Adolescente
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {direitos.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            {item}
          </div>
        ))}
      </div>

    </section>
  )
}
