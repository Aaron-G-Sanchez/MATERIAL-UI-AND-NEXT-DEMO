'use client'
import { createContext } from 'react'
import '../styles/globals.css'
import Nav from '../components/nav'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Page() {
  let { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])

  return (
    <>
      <header className="hero-container">
        {/* <Nav /> */}
        <motion.img
          className="background"
          src="/assets/images/cover.jpg"
          alt="Mountains with a blue sky"
          style={{ y }}
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
