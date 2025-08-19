export default function Portfolio() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0a0a0a', color: '#eee', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #333' }}>
        <h1 style={{ color: '#00ffff' }}>Niklesh Sahu</h1>
        <p>Software Test Engineer | QA Analyst</p>
      </header>

      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#00cccc' }}>About Me</h2>
        <p style={{ maxWidth: '600px', margin: '20px auto' }}>
          I am a passionate Software Test Engineer with 3.5+ years of experience in manual testing, API testing, and database validation. 
          I enjoy ensuring high-quality software through functional and non-functional testing, with experience across mobile and web applications in the banking and cruise domains.
        </p>
      </section>

      <section style={{ padding: '40px', backgroundColor: '#111' }}>
        <h2 style={{ color: '#00cccc', textAlign: 'center' }}>Experience & Projects</h2>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr', maxWidth: '800px', margin: '20px auto' }}>
          <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '10px' }}>
            <h3 style={{ color: '#00ffff' }}>Cruise Guest Activity App</h3>
            <p>Tested login functionality, activity booking flows, and backend validations for a cruise mobile app used by thousands of guests.</p>
          </div>
          <div style={{ backgroundColor: '#222', padding: '20px', borderRadius: '10px' }}>
            <h3 style={{ color: '#00ffff' }}>SBI YONO Car Loan Journey</h3>
            <p>Worked on CSP and non-CSP flows for ETB Salaried Car Loan application journey, including sectional screens and entry condition testing.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#00cccc' }}>Skills</h2>
        <div style={{ marginTop: '20px' }}>
          {["Manual Testing", "API Testing", "Database Testing", "Jira", "Postman", "SQL", "Mobile & Web Testing", "AI & Prompt Engineering Basics"].map(skill => (
            <span key={skill} style={{ backgroundColor: '#222', padding: '10px 15px', borderRadius: '20px', margin: '5px', display: 'inline-block' }}>{skill}</span>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px', backgroundColor: '#111', textAlign: 'center' }}>
        <h2 style={{ color: '#00cccc' }}>Contact</h2>
        <p>📧 Email: yourname@email.com</p>
        <p>🔗 LinkedIn: linkedin.com/in/niklesh-sahu</p>
        <p>💻 GitHub: github.com/Niklesh88</p>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #333' }}>
        © {new Date().getFullYear()} Niklesh Sahu | Portfolio
      </footer>
    </div>
  );
}
