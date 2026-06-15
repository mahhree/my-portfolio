import { PRICES, fmt } from '../constants/data';

const outlineBtn = (color) => ({
  background: 'transparent',
  color,
  border: `2px solid ${color}`,
  padding: '10px 22px',
  borderRadius: 30,
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
});

const Work = ({ onAddItem }) => {
  return (
    <section id="work" style={{ padding: '72px 48px', maxWidth: 820, margin: '0 auto' }}>
      <p style={{ fontSize: 11, letterSpacing: 3, color: '#9B7B5A', textTransform: 'uppercase', marginBottom: 8 }}>
        About the Barista
      </p>
      <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 32, color: '#2C1A0E', lineHeight: 1.2 }}>
        Building platforms people<br />actually depend on.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, fontSize: 15, lineHeight: 1.8, color: '#5C3D2E' }}>
        <p>
          I am a full-stack software engineer at Premier America Credit Union where I work on a digital
          banking platform used by real members every day. I work in two-week Agile sprints across the
          entire stack, collaborating with product owners, designers, and operations teams to take features
          from requirements all the way through to production.
        </p>
        <p>
          I built ACH enrollment and remote deposit capture for business members from the ground up,
          designing secure RESTful APIs and integrating third-party platforms using React and Python. As
          the platform evolved, I rebuilt those features in Angular with Node.js as part of a larger
          initiative to launch a new digital account opening and online banking experience. That rebuild
          also included developing an automated check deposit hold system through a direct integration with
          our core banking system, which reduced fraud by approximately 70% and cut manual internal work
          by roughly 40%. Across both efforts I coordinated with multiple departments to gather
          requirements, resolve bugs, and streamline internal workflows by approximately 50%.
        </p>
        <p>
          Outside of work I maintain a React-based portfolio project on GitHub and I am currently working
          through a C++ project to sharpen my systems-level programming knowledge. I am always looking for
          the next challenge that pushes me to think at a larger scale.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
        <a
          href="https://github.com/mariekaribyan"
          target="_blank"
          rel="noreferrer"
          onClick={() => onAddItem('GitHub', PRICES.github)}
          style={outlineBtn('#2C1A0E')}
        >
          GitHub · {fmt(PRICES.github)}
        </a>
        <a
          href="https://linkedin.com/in/mariekaribyan"
          target="_blank"
          rel="noreferrer"
          onClick={() => onAddItem('LinkedIn', PRICES.linkedin)}
          style={outlineBtn('#0077B5')}
        >
          LinkedIn · {fmt(PRICES.linkedin)}
        </a>
        <a
          href="mailto:marie@email.com"
          onClick={() => onAddItem('Email Me', PRICES.email)}
          style={outlineBtn('#9B7B5A')}
        >
          Email Me · {fmt(PRICES.email)}
        </a>
      </div>
    </section>
  );
};

export default Work;
