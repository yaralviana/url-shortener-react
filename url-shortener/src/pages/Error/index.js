import "./error.css";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="error">
      <h1>Página não encontrada</h1>
      <p>Essa página que você está procurando não existe.</p>
      <Link className="link" to="/">
        Voltar para pagina inicial
      </Link>
    </div>
  );
}
