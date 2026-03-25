import './Skills.css'

const skillGroups = [
  {
    label: 'Frontend',
    color: 'accent',
    skills: [
      { name: 'Next.js', level: 75 },
      { name: 'React', level: 78 },
      { name: 'Flutter (Dart)', level: 80 },
    ]
  },
  {
    label: 'Backend',
    color: 'green',
    skills: [
      { name: 'Spring Boot', level: 82 },
      { name: 'Node.js', level: 78 },
      { name: 'Firebase Auth & Firestore', level: 85 },
    ]
  },
  {
    label: 'Databases',
    color: 'purple',
    skills: [
      { name: 'MySQL', level: 83 },
      { name: 'Firebase (Firestore)', level: 80 },
      { name: 'SQL Server', level: 75 },
    ]
  },
  {
    label: 'Tools & Practices',
    color: 'accent',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Agile / Scrum', level: 72 },
      { name: 'XAMPP', level: 75 },
    ]
  },
]

const colorMap = {
  accent: 'var(--accent)',
  green: 'var(--accent3)',
  purple: 'var(--accent2)',
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-sub" style={{ marginBottom: 60 }}>
          A hands-on developer with practical experience across the full stack — from databases to UIs.
        </p>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.label} className="skill-group card">
              <div className={`group-label tag ${group.color}`}>{group.label}</div>
              <div className="skill-bars">
                {group.skills.map(s => (
                  <div key={s.name} className="skill-bar-row">
                    <div className="skill-bar-header">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct" style={{ color: colorMap[group.color] }}>{s.level}%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{
                          width: `${s.level}%`,
                          background: `linear-gradient(90deg, ${colorMap[group.color]}, ${colorMap[group.color]}88)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}