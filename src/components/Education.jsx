import './Education.css'

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>

        <div className="edu-grid">
          <div className="edu-card card">
            <div className="edu-icon">🎓</div>
            <div className="edu-content">
              <div className="edu-year tag">2nd Year · Ongoing</div>
              <h3 className="edu-degree">BSc (Hons) in Computing</h3>
              <div className="edu-institution">
                NIBM — National Institute of Business Management
              </div>
              <div className="edu-affiliation">
                Affiliated with Coventry University, UK
              </div>
              <p className="edu-desc">
                Studying Software Engineering with a focus on backend systems, 
                object-oriented programming, databases, and agile software development practices.
              </p>
            </div>
          </div>

          <div className="references-card card">
            <h3 className="ref-title">References</h3>
            <div className="ref-list">
              <div className="ref-item">
                <div className="ref-name">Sujani Mahawatta</div>
                <div className="ref-role">Course Director — NIBM</div>
                <div className="ref-contact">
                  <a href="mailto:sujani@nibm.lk">sujani@nibm.lk</a>
                  <span>0703339410</span>
                </div>
              </div>
              <div className="ref-divider" />
              <div className="ref-item">
                <div className="ref-name">Manjula Kulathunga</div>
                <div className="ref-role">Senior Software Engineer — Wyshiet</div>
                <div className="ref-contact">
                  <a href="mailto:pmkkulathunga@gmail.com">pmkkulathunga@gmail.com</a>
                  <span>0776200029</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}