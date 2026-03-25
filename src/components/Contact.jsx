import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Replace with your email service (EmailJS, Formspree, etc.)
    const mailtoLink = `mailto:roshel.shan23@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + '\nEmail: ' + form.email)}`
    window.open(mailtoLink)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <p className="section-label">Let's Talk</p>
            <h2 className="section-title">
              Get In<br />
              <span className="highlight">Touch</span>
            </h2>
            <p className="contact-desc">
              I'm actively looking for a Backend Engineer Internship. 
              If you have an opportunity or just want to connect — I'd love to hear from you.
            </p>

            <div className="contact-methods">
              <a href="mailto:roshel.shan23@gmail.com" className="method-card card">
                <span className="method-icon">📧</span>
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value">roshel.shan23@gmail.com</div>
                </div>
              </a>
              <a href="tel:0762755941" className="method-card card">
                <span className="method-icon">📞</span>
                <div>
                  <div className="method-label">Phone</div>
                  <div className="method-value">0762755941</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/vishwa-roshel" target="_blank" rel="noreferrer" className="method-card card">
                <span className="method-icon">💼</span>
                <div>
                  <div className="method-label">LinkedIn</div>
                  <div className="method-value">linkedin.com/vishwa-roshel</div>
                </div>
              </a>
              <a href="https://github.com/silwesthrige" target="_blank" rel="noreferrer" className="method-card card">
                <span className="method-icon">⌨️</span>
                <div>
                  <div className="method-label">GitHub</div>
                  <div className="method-value">github.com/silwesthrige</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity..."
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {sent ? '✅ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}