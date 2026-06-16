import { IMAGES, PRICES, fmt } from '../constants/data';

const socialLinks = [
  {
    label: 'GitHub',
    price: PRICES.github,
    href: 'https://github.com/mahhree',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5EFE6">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    price: PRICES.linkedin,
    href: 'https://www.linkedin.com/in/marie-karibyan-3b7937214/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5EFE6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email Me',
    price: PRICES.email,
    href: 'mailto:mariekaribyan@email.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
];

const Hero = ({ onAddItem }) => {
  return (
    <section id="about" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      alignItems: 'center',
      padding: '60px 48px 40px',
      gap: 40,
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* LEFT — BIO */}
      <div style={{ flex: '1 1 300px', maxWidth: 360 }}>
        <p style={{ fontSize: 11, letterSpacing: 3, color: '#9B7B5A', textTransform: 'uppercase', marginBottom: 8 }}>
          Today's Special
        </p>
        <h1 style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.15, margin: '0 0 8px', color: '#2C1A0E' }}>
          Crafting Digital<br />Experiences
        </h1>
        <p style={{ fontSize: 12, color: '#9B7B5A', marginBottom: 16, fontStyle: 'italic' }}>
          Full-Stack Software Engineer · Premier America Credit Union
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5C3D2E', marginBottom: 28 }}>
          Building production-grade platforms that serve real members every day.
          I work across React, Angular, Node.js, TypeScript, and Python and I'm always working on something new.
        </p>
        <a
          href="mailto:marie@email.com"
          onClick={() => onAddItem("Let's Connect (Email)", PRICES.connect)}
          style={{
            background: '#2C1A0E',
            color: '#F5EFE6',
            padding: '12px 24px',
            borderRadius: 30,
            fontSize: 14,
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          Let's Connect
          <span style={{ background: '#9B7B5A', borderRadius: '50%', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>→</span>
          <span style={{ fontSize: 11, opacity: 0.75 }}>{fmt(PRICES.connect)}</span>
        </a>
      </div>

      {/* CENTER — HERO IMAGE */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          width: 260,
          height: 260,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          margin: '0 auto',
          overflow: 'hidden',
        }}>
          <img
            src={IMAGES.coffeeMug}
            alt="hero"
            style={{ width: 200, height: 200, objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* RIGHT — SOCIAL LINKS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
        <p style={{ fontSize: 11, letterSpacing: 2, color: '#9B7B5A', textTransform: 'uppercase', marginBottom: 4}}>
          Find Me At
        </p>
        {socialLinks.map(({ label, price, href, icon }) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email Me' ? '_blank' : undefined}
            rel="noreferrer"
            onClick={() => onAddItem(label, price)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#2C1A0E',
              color: '#F5EFE6',
              padding: '12px 16px',
              borderRadius: 12,
              fontSize: 13,
              fontWeight: 600,
              width: '100%',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{icon}{label}</span>
            <span style={{ fontSize: 12, color: '#9B7B5A', fontWeight: 700 }}>{fmt(price)}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
