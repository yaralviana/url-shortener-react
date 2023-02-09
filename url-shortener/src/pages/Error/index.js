import "./error.css"
import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"

export default function Admin() {
  return (
    <div className="error">
      <Logo />
      <h1>Página não encontrada</h1>
      <p>Essa página que você está procurando não existe.</p>
      <Link className="link" to="/">
        Voltar para pagina inicial
      </Link>
    </div>
  )
}
