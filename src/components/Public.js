import { Link } from "react-router-dom"

const Public = () => {
  const content = (
    <section className="public">
      <header>
          <h1>Welcome to <span className="nowrap">Pearls Nails Parlour!</span></h1>
      </header>
      <main className="public__main">
          <p>Located in Nairobi City, Pearls Nails Parlour provides a range of professional nail care and beauty services.</p>
          <address className="public__addr">
          Pearls Nails Parlour<br />
              Nairobi City<br />
              <a href="tel:+254 722554294">(+254) 722-554-294</a>
          </address>
          <br />
          <p>Owner: Ritta Sweta</p>
      </main>
      <footer>
          <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  )
  return content
}

export default Public
