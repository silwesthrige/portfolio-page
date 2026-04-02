import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building the backend<br />
              <span className="highlight">that powers everything</span>
            </h2>
            <p className="about-text">
              I'm a 2nd Year BSc (Hons) Computing undergraduate at NIBM (Coventry University UK Affiliated), 
              with a passion for backend development and system design. I've built real-world applications 
              involving databases, APIs, and server-side logic.
            </p>
            <p className="about-text">
              Whether it's crafting REST APIs with Spring Boot, designing database schemas, or architecting 
              full-stack solutions — I focus on building systems that are reliable, scalable, and clean.
              I'm currently seeking a <strong>Backend Engineer Internship</strong> to apply my skills and 
              grow as a professional developer..
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>Thalammahara, Pannala, Sri Lanka</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <a href="mailto:roshel.shan23@gmail.com">roshel.shan23@gmail.com</a>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <span>0762755941</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
              Contact Me
            </a>
          </div>

          <div className="about-right">
            <div className="about-card card">
              <h3>What I focus on</h3>
              <div className="focus-list">
                {[
                  { icon: '⚙️', title: 'Backend Development', desc: 'Spring Boot, Node.js, REST APIs, Firebase' },
                  { icon: '🗄️', title: 'Database Design', desc: 'MySQL, Firebase Firestore, SQL Server' },
                  { icon: '🔐', title: 'Auth & Security', desc: 'JWT, Firebase Auth, secure API design' },
                  { icon: '🖥️', title: 'Full Stack', desc: 'Next.js, React, Flutter — end to end' },
                ].map(f => (
                  <div key={f.title} className="focus-item">
                    <span className="focus-icon">{f.icon}</span>
                    <div>
                      <div className="focus-title">{f.title}</div>
                      <div className="focus-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-skills card">
              <h3>Soft Skills</h3>
              <div className="tag-cloud">
                {['Communication', 'Team Collaboration', 'Leadership', 'Problem-Solving', 'Adaptability', 'Time Management', 'Resilience', 'Mentoring'].map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}