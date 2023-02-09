import "./logo.css"
import { Link } from "react-router-dom"

export function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">URLize</h1>
    </Link>
  )
}
