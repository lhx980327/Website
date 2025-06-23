export default function Home() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3730a3 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    nav: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      transition: 'color 0.3s',
      ':hover': {
        color: 'white'
      }
    },
    hero: {
      padding: '5rem 1.5rem',
      textAlign: 'center',
      position: 'relative'
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.2), rgba(147, 51, 234, 0.2))'
    },
    heroContent: {
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative'
    },
    profileImage: {
      width: '8rem',
      height: '8rem',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '4px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      margin: '0 auto 1.5rem',
      display: 'block'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 4rem)',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #dbeafe, #e9d5ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      color: '#dbeafe',
      marginBottom: '0.5rem'
    },
    heroLocation: {
      fontSize: '1.125rem',
      color: '#bfdbfe',
      marginBottom: '2rem'
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem'
    },
    button: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      textDecoration: 'none',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      border: 'none',
      boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.4)'
    },
    section: {
      padding: '5rem 1.5rem',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    sectionAlt: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(8px)'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    sectionDivider: {
      width: '6rem',
      height: '4px',
      background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
      margin: '0 auto 3rem',
      borderRadius: '2px'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    skillCard: {
      background: 'rgba(59, 130, 246, 0.2)',
      backdropFilter: 'blur(12px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      transition: 'all 0.3s'
    },
    skillIcon: {
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    skillTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.75rem'
    },
    skillText: {
      color: '#dbeafe',
      lineHeight: '1.6'
    },
    educationItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '2rem'
    },
    educationIcon: {
      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      borderRadius: '50%',
      padding: '0.75rem',
      flexShrink: 0
    },
    educationContent: {
      flex: 1
    },
    educationTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.5rem'
    },
    educationDegree: {
      color: '#dbeafe',
      marginBottom: '0.25rem'
    },
    educationDetails: {
      color: '#bfdbfe',
      marginBottom: '0.5rem'
    },
    educationCourses: {
      fontSize: '0.875rem',
      color: '#93c5fd'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s'
    },
    projectIcon: {
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.5rem'
    },
    projectMeta: {
      fontSize: '0.875rem',
      color: '#93c5fd',
      marginBottom: '0.75rem'
    },
    projectDescription: {
      color: '#dbeafe',
      fontSize: '0.875rem',
      lineHeight: '1.6'
    },
    footer: {
      background: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '3rem 1.5rem',
      textAlign: 'center'
    },
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1rem'
    },
    footerText: {
      color: '#dbeafe',
      marginBottom: '1.5rem'
    },
    contactLinks: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#bfdbfe',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    copyright: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '1.5rem',
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.875rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>Haoxin Liu</div>
          <ul style={styles.navLinks}>
            <li><a href="#about" style={styles.navLink}>About</a></li>
            <li><a href="#experience" style={styles.navLink}>Experience</a></li>
            <li><a href="#projects" style={styles.navLink}>Projects</a></li>
            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroOverlay}></div>
          <div style={styles.heroContent}>
            <img
              src="/profile.jpg"
              alt="Haoxin Liu"
              style={styles.profileImage}
            />
            <h1 style={styles.heroTitle}>Haoxin Liu</h1>
            <p style={styles.heroSubtitle}>Software Engineer & Robotics Researcher</p>
            <p style={styles.heroLocation}>Cambridge, MA</p>
            
            <div style={styles.buttonContainer}>
              <a href="mailto:lhx980327@gmail.com" style={styles.button}>
                📧 Email
              </a>
              <a href="tel:9092150465" style={styles.button}>
                📞 Call
              </a>
              <a href="https://www.linkedin.com/in/haoxin-liu-07955215a" 
                 target="_blank" rel="noopener noreferrer"
                 style={{...styles.button, ...styles.primaryButton}}>
                💼 LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{...styles.section, ...styles.sectionAlt}}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.sectionDivider}></div>
          <div style={styles.card}>
            <p style={{color: '#dbeafe', fontSize: '1.125rem', lineHeight: '1.7'}}>
              I am a graduate student at Northeastern University (MS in Electrical and Computer Engineering, GPA: 3.8/4.0),
              with a BS in Computer Science from Cal Poly Pomona (GPA: 3.9/4.0). I'm passionate about mobile and full-stack development,
              robotics, and AI. I have a proven record in building robust software and intelligent systems for both enterprise and research applications.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.sectionDivider}></div>
          <div style={styles.skillsGrid}>
            <div style={{...styles.skillCard, borderColor: 'rgba(59, 130, 246, 0.3)'}}>
              <div style={styles.skillIcon}>💻</div>
              <h3 style={styles.skillTitle}>Programming & Tools</h3>
              <p style={styles.skillText}>React.js, React Native, Node.js, Python, MongoDB, Salesforce, OpenCV, GTSAM, Ceres, SciPy, g2opy</p>
            </div>
            <div style={{...styles.skillCard, background: 'rgba(147, 51, 234, 0.2)', borderColor: 'rgba(147, 51, 234, 0.3)'}}>
              <div style={styles.skillIcon}>🤖</div>
              <h3 style={styles.skillTitle}>Robotics & AI</h3>
              <p style={{...styles.skillText, color: '#e9d5ff'}}>Simulation, modeling, GPS navigation, localization, trajectory analysis (ORB-SLAM3), GenAI, AI chatbots</p>
            </div>
            <div style={{...styles.skillCard, background: 'rgba(99, 102, 241, 0.2)', borderColor: 'rgba(99, 102, 241, 0.3)'}}>
              <div style={styles.skillIcon}>📱</div>
              <h3 style={styles.skillTitle}>Full Stack & Mobile</h3>
              <p style={{...styles.skillText, color: '#e0e7ff'}}>Mobile app development, RESTful APIs, database design, SwiftUI, Azure</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section style={{...styles.section, ...styles.sectionAlt}}>
          <h2 style={styles.sectionTitle}>Education</h2>
          <div style={styles.sectionDivider}></div>
          <div>
            <div style={styles.educationItem}>
              <div style={styles.educationIcon}>
                <div style={{color: 'white', fontSize: '1.25rem'}}>🎓</div>
              </div>
              <div style={styles.educationContent}>
                <h3 style={styles.educationTitle}>Northeastern University</h3>
                <p style={styles.educationDegree}>Master of Science in Electrical and Computer Engineering</p>
                <p style={styles.educationDetails}>Aug 2023 – May 2025 | GPA: 3.8/4.0</p>
                <p style={styles.educationCourses}>Relevant Coursework: Navigation and Sensing, Assistive Robotics, Field Autonomous Robotics, Computer Vision, Legged Robotics</p>
              </div>
            </div>
            <div style={styles.educationItem}>
              <div style={{...styles.educationIcon, background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
                <div style={{color: 'white', fontSize: '1.25rem'}}>🎓</div>
              </div>
              <div style={styles.educationContent}>
                <h3 style={styles.educationTitle}>California State Polytechnic University, Pomona</h3>
                <p style={styles.educationDegree}>Bachelor of Science in Computer Science</p>
                <p style={styles.educationDetails}>Aug 2017 – Dec 2021 | GPA: 3.9/4.0</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" style={styles.section}>
          <h2 style={styles.sectionTitle}>Work Experience</h2>
          <div style={styles.sectionDivider}></div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div style={styles.card}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem'}}>
                <div style={{...styles.educationIcon, background: 'linear-gradient(135deg, #3b82f6, #2563eb)'}}>
                  <div style={{color: 'white', fontSize: '1.25rem'}}>📱</div>
                </div>
                <div style={{flex: 1}}>
                  <h3 style={styles.educationTitle}>Mobile Application Developer</h3>
                  <p style={styles.educationDegree}>Southern California Edison (SCE), Rosemead, CA</p>
                  <p style={styles.educationDetails}>Mar 2023 – June 2025</p>
                </div>
              </div>
              <ul style={{color: '#dbeafe', lineHeight: '1.6', paddingLeft: '1rem'}}>
                <li>Led development and enhancement of enterprise mobile applications using Next.js and Node.js, supporting 2,000+ users.</li>
                <li>Delivered 10+ major upgrades improving UI/UX, database performance, and app speed.</li>
                <li>Collaborated in Agile, cross-functional teams to deliver projects on schedule and quickly respond to changing business requirements.</li>
              </ul>
            </div>
            <div style={styles.card}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem'}}>
                <div style={{...styles.educationIcon, background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
                  <div style={{color: 'white', fontSize: '1.25rem'}}>⚡</div>
                </div>
                <div style={{flex: 1}}>
                  <h3 style={styles.educationTitle}>Salesforce Engineer</h3>
                  <p style={styles.educationDegree}>Southern California Edison (SCE), Rosemead, CA</p>
                  <p style={styles.educationDetails}>Aug 2021 – Feb 2023</p>
                </div>
              </div>
              <ul style={{color: '#dbeafe', lineHeight: '1.6', paddingLeft: '1rem'}}>
                <li>Managed user administration, security settings, profiles, and workflow automation in Salesforce.</li>
                <li>Completed Salesforce Administrator and Platform Developer I certifications.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{...styles.section, ...styles.sectionAlt}}>
          <h2 style={styles.sectionTitle}>Projects & Research</h2>
          <div style={styles.sectionDivider}></div>
          <div style={styles.projectsGrid}>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>🔬</div>
              <h3 style={styles.projectTitle}>3D Reconstruction on Robots View</h3>
              <p style={styles.projectMeta}>Northeastern University | Sep 2024 – Dec 2024</p>
              <p style={styles.projectDescription}>
                Developed a 3D image registration pipeline using 100+ datasets, enabling sparse 3D reconstruction from feature correspondences.
                Applied bundle adjustment (OpenCV, Ceres, SciPy, GTSAM, g2opy) to refine 3D points and camera parameters.
              </p>
            </div>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>🤖</div>
              <h3 style={styles.projectTitle}>Three-link Robot Modeling and Control</h3>
              <p style={styles.projectMeta}>Northeastern University | Jan 2024 – May 2024</p>
              <p style={styles.projectDescription}>
                Modeled a simplified three-link bipedal robot, analyzed single-support phase dynamics, and designed a nonlinear controller for zero dynamics manifold attraction.
              </p>
            </div>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>🎵</div>
              <h3 style={styles.projectTitle}>Music Transformation Device</h3>
              <p style={styles.projectMeta}>Northeastern University | Sep 2023 – Dec 2023</p>
              <p style={styles.projectDescription}>
                Designed a device for deaf users using advanced stepper motors and solenoids to transform music into tactile feedback.
                Leveraged FFT algorithm for real-time music analysis.
              </p>
            </div>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>📱</div>
              <h3 style={styles.projectTitle}>Swift UI Business Portal (iOS)</h3>
              <p style={styles.projectMeta}>SCE | Oct 2024 – May 2025</p>
              <p style={styles.projectDescription}>
                Designed and built secure iOS business portal with SwiftUI, Azure AD, and Dynatrace monitoring—reducing app crashes by 35%.
                Integrated SharePoint for document management, boosting document retrieval and user satisfaction.
              </p>
            </div>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>☁️</div>
              <h3 style={styles.projectTitle}>Company Application Installation Platform</h3>
              <p style={styles.projectMeta}>SCE | Jan 2024 – Sep 2024</p>
              <p style={styles.projectDescription}>
                Architected and launched a SaaS platform on Azure for secure company software distribution—achieving 99.9% uptime and full compliance.
              </p>
            </div>
            <div style={styles.projectCard}>
              <div style={styles.projectIcon}>💬</div>
              <h3 style={styles.projectTitle}>AI Chatbot for SCE.com</h3>
              <p style={styles.projectMeta}>SCE | May 2023 – Dec 2023</p>
              <p style={styles.projectDescription}>
                Developed and deployed AI-powered chatbot, reducing average response times by 50% and live support workload by 30%.
                Upgraded to GenAI-enabled chatbot with Copilot integration, delivering personalized, role-based responses.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <h3 style={styles.footerTitle}>Let's Connect</h3>
        <p style={styles.footerText}>I'm always interested in discussing new opportunities and innovative projects.</p>
        <div style={styles.contactLinks}>
          <a href="mailto:lhx980327@gmail.com" style={styles.contactLink}>
            <span>📧</span>
            <span>lhx980327@gmail.com</span>
          </a>
          <a href="tel:9092150465" style={styles.contactLink}>
            <span>📞</span>
            <span>(909) 215-0465</span>
          </a>
          <a href="https://www.linkedin.com/in/haoxin-liu-07955215a" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
        <div style={styles.copyright}>
          <p>© 2025 Haoxin Liu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}