import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-600">
          Cuidar é Proteger
        </h1>

        <div className="flex gap-6 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-600">Início</Link>
          <Link to="/direitos" className="hover:text-blue-600">Direitos</Link>
          <Link to="/acoes" className="hover:text-blue-600">Ações</Link>
          <Link to="/contato" className="hover:text-blue-600">Contato</Link>
        </div>

      </div>
    </nav>
  )
}
