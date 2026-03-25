import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          Vishwa
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </header>
  )
}