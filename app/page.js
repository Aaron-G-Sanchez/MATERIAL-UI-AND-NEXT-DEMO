import '../styles/globals.css'
import Nav from '../components/nav'

export default function Page() {
  return (
    <main>
      {/* <Nav /> */}
      <header className="hero-container">
        <section className="hero">
          <h1 className="hero-title">ELEVATE</h1>
          <section className="hero-foreground"></section>
        </section>
      </header>

      <section className="content">
        <h2>This is the content</h2>
      </section>
    </main>
  )
}
