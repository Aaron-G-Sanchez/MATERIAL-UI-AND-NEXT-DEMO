import '../styles/globals.css'
import Nav from '../components/nav'

export default function Page() {
  return (
    <>
      <header className="hero-container">
        {/* <Nav /> */}
        <img
          className="background"
          src="/assets/images/cover.jpg"
          alt="Mountains with a blue sky"
        />
        <h1 className="title">ELEVATE</h1>
        <img
          className="foreground"
          src="/assets/images/cover-foreground.png"
          alt="Large mountain summit"
        />
      </header>

      <main className="content">
        <h2>This is the content</h2>
      </main>
    </>
  )
}
