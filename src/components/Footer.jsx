import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>Shan<span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-text">
          Silwesthrige Vishwa Roshel Shan · Software Engineering Undergraduate
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} · Built with React · Designed with ❤️
        </p>
      </div>
    </footer>
  )
}