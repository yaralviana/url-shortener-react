import "./logo.css"
import { Link } from "react-router-dom"

export function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">
        URL<span className="logo-text">ize</span>
      </h1>
    </Link>
  )
}
