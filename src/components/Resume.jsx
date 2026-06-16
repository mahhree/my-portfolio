import { PRICES, fmt } from '../constants/data';

const Resume = ({ onAddItem }) => {
  return (
    <section id="resume" style={{ background: '#2C1A0E', padding: '64px 48px', textAlign: 'center' }}>
      <p style={{ fontSize: 11, letterSpacing: 3, color: '#9B7B5A', textTransform: 'uppercase', marginBottom: 12 }}>
        Take the menu home
      </p>
      <h2 style={{ fontSize: 34, fontWeight: 700, color: '#F5EFE6', marginBottom: 12 }}>
        Download My Resume
      </h2>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
        A full overview of my experience, skills, and projects on one page.
      </p>
      <a
        href="/resume.pdf"
        download="Marie_Karibyan_Resume.pdf"
        onClick={() => onAddItem('Resume Download', PRICES.resume)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          background: '#F5EFE6',
          color: '#2C1A0E',
          padding: '15px 32px',
          borderRadius: 30,
          fontSize: 14,
          fontWeight: 700,
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C1A0E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
        </svg>
        Download Resume · {fmt(PRICES.resume)}
      </a>
    </section>
  );
};

export default Resume;
