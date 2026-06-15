import { useState } from 'react';
import { projects, PRICES, fmt } from '../constants/data';

const arrowBtn = {
  width: 44,
  height: 44,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  border: 'none',
  color: '#F5EFE6',
  fontSize: 28,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.2s',
  flexShrink: 0,
};

const Projects = ({ addedProjects, onAddProject }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const scroll = (dir) => {
    const next = activeIndex + dir;
    if (next >= 0 && next < projects.length) setActiveIndex(next);
  };

  return (
    <section id="projects" style={{ background: '#2C1A0E', padding: '48px 0', marginTop: 32 }}>
      <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>
        On The Menu
      </p>
      <h2 style={{ color: '#F5EFE6', textAlign: 'center', fontSize: 28, fontWeight: 700, marginBottom: 4 }}>
        Projects
      </h2>
      <p style={{ color: '#9B7B5A', textAlign: 'center', fontSize: 13, marginBottom: 32 }}>
        Each project adds {fmt(PRICES.project)} to your tab
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '0 40px' }}>
        {/* LEFT ARROW */}
        <button
          onClick={() => scroll(-1)}
          disabled={activeIndex === 0}
          style={{ ...arrowBtn, opacity: activeIndex === 0 ? 0.3 : 1 }}
        >‹</button>

        {/* CARDS */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', overflow: 'hidden', width: '100%', maxWidth: 860, justifyContent: 'center' }}>
          {projects.map((project, i) => {
            const offset = i - activeIndex;
            if (Math.abs(offset) > 1) return null;
            const isActive = offset === 0;
            const added = addedProjects.includes(project.title);

            return (
              <div
                key={i}
                onClick={() => !isActive && setActiveIndex(i)}
                style={{
                  flexShrink: 0,
                  width: isActive ? 260 : 180,
                  background: isActive ? '#F5EFE6' : 'rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  padding: isActive ? '28px 24px' : '20px 18px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: isActive ? 'default' : 'pointer',
                  opacity: isActive ? 1 : 0.6,
                  boxShadow: isActive ? '0 12px 40px rgba(0,0,0,0.4)' : 'none',
                }}
              >
                <div style={{
                  width: isActive ? 90 : 70,
                  height: isActive ? 90 : 70,
                  borderRadius: '50%',
                  background: project.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: isActive ? 52 : 40, height: isActive ? 52 : 40, objectFit: 'contain' }}
                  />
                </div>

                <div style={{ fontWeight: 700, fontSize: isActive ? 15 : 13, color: isActive ? '#2C1A0E' : '#F5EFE6', marginBottom: 4 }}>
                  {project.title}
                </div>
                <div style={{ fontSize: 11, color: isActive ? '#9B7B5A' : 'rgba(255,255,255,0.5)', marginBottom: isActive ? 10 : 0 }}>
                  {project.subtitle}
                </div>

                {isActive && (
                  <p style={{ fontSize: 12, color: '#5C3D2E', lineHeight: 1.6, margin: '0 0 16px' }}>
                    {project.desc}
                  </p>
                )}

                {isActive && (
                  <button
                    onClick={() => onAddProject(project.title)}
                    style={{
                      background: added ? '#9B7B5A' : '#2C1A0E',
                      color: '#F5EFE6',
                      border: 'none',
                      borderRadius: 30,
                      padding: '9px 20px',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: added ? 'default' : 'pointer',
                      width: '100%',
                      transition: 'background 0.2s',
                    }}
                  >
                    {added ? '✓ Added to Order' : `Add to Order · ${fmt(PRICES.project)}`}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll(1)}
          disabled={activeIndex === projects.length - 1}
          style={{ ...arrowBtn, opacity: activeIndex === projects.length - 1 ? 0.3 : 1 }}
        >›</button>
      </div>

      {/* DOTS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: i === activeIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              background: i === activeIndex ? '#9B7B5A' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
