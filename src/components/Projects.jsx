import './Projects.css'

const projects = [
  {
    title: 'The Tumeric Indian Cuisine',
    date: 'Jul – Aug 2025',
    type: 'Full Stack Application',
    desc: 'A complete restaurant management system with separate apps for customers, drivers, and administrators — providing a seamless online food ordering experience.',
    tags: ['Flutter', 'PHP', 'Firebase', 'Dart'],
    role: 'Lead Developer',
    highlights: ['System design & architecture', 'UI/UX across 3 platforms', 'Database integration', 'Multi-role app management'],
    links: [
      { label: 'Customer App', href: '#' },
      { label: 'Driver App', href: '#' },
      { label: 'Admin Website', href: '#' },
    ],
    accent: 'accent',
    featured: true,
  },
  {
    title: 'Petshop Management System',
    date: '2025',
    type: 'Enterprise Web Application',
    desc: 'A secure, scalable web application replacing manual pet shop processes — improving operational efficiency through a modern full-stack architecture.',
    tags: ['React', 'Spring Boot', 'JWT', 'MySQL'],
    role: 'Full-Stack Developer',
    highlights: ['Requirement analysis & design', 'React + Spring Boot integration', 'JWT authentication', 'REST API development'],
    links: [],
    accent: 'purple',
    featured: false,
  },
  {
    title: 'Hotel Management System',
    date: 'Apr – May 2025',
    type: 'Desktop Application',
    desc: 'A Windows-based hotel management app to simplify operations — automating room booking, billing, and customer management.',
    tags: ['C#', '.NET', 'SQL Server'],
    role: 'Developer',
    highlights: ['UI design & implementation', 'Core logic development', 'Database integration', 'Billing automation'],
    links: [],
    accent: 'green',
    featured: false,
  },
  {
    title: 'Assistive Service Robot',
    date: 'Dec 2025 – Jan 2026',
    type: 'Hardware + Software (IoT)',
    desc: 'A smart robot for elderly assistance and safety monitoring — with obstacle detection, robotic arm control, and live camera feed.',
    tags: ['ESP32', 'Computer Vision', 'C++', 'Blynk'],
    role: 'Developer',
    highlights: ['Obstacle detection (ultrasonic)', '4-servo robotic arm', 'ESP32-CAM vision', 'Mobile remote control (Blynk)'],
    badge: '🏆 1st Place – University Competition',
    links: [],
    accent: 'accent',
    featured: false,
  },
]

const accentMap = {
  accent: 'var(--accent)',
  green: 'var(--accent3)',
  purple: 'var(--accent2)',
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub" style={{ marginBottom: 60 }}>
          Real-world applications spanning mobile, web, desktop, and hardware.
        </p>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={p.title} className={`project-card card ${p.featured ? 'featured' : ''}`} style={{ '--c': accentMap[p.accent] }}>
              <div className="project-header">
                <div>
                  <div className="project-meta">
                    <span className={`tag ${p.accent === 'accent' ? '' : p.accent}`}>{p.type}</span>
                    <span className="project-date">{p.date}</span>
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  {p.badge && <div className="project-badge">{p.badge}</div>}
                </div>
                <div className="project-number">0{i + 1}</div>
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="project-body">
                <div className="project-highlights">
                  <div className="highlights-label">Key Contributions</div>
                  <ul>
                    {p.highlights.map(h => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-footer">
                  <div className="project-role">
                    <span className="role-label">Role</span>
                    <span className="role-value">{p.role}</span>
                  </div>

                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>

                  {p.links.length > 0 && (
                    <div className="project-links">
                      {p.links.map(l => (
                        <a key={l.label} href={l.href} className="project-link">
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}