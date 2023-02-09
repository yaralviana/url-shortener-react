import "./home.css"

export default function Home() {
  return (
    <div className="home-container">
      <h1>Pagina Home</h1>
      <span>Veja meus links abaixo</span>
      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Twitter</p>
          </a>
        </section>
      </main>
    </div>
  )
}
