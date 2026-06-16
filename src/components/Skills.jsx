import { skills, PRICES, SKILL_COLORS, fmt } from '../constants/data';

const Skills = ({ activeSkills, onToggleSkill }) => {
  return (
    <section id="skills" style={{ padding: '48px 48px 32px', borderTop: '1px solid #E0D4C3', textAlign: 'center' }}>
      <p style={{ fontSize: 11, letterSpacing: 3, color: '#9B7B5A', textTransform: 'uppercase', marginBottom: 6 }}>
        Customize Your Order
      </p>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 6, color: '#2C1A0E' }}>
        Skill Add-Ons
      </h2>
      <p style={{ fontSize: 13, color: '#9B7B5A', marginBottom: 28 }}>
        Toggle the add-ons that matter to you.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {skills.map((skill, i) => {
          const active = activeSkills.includes(skill.name);
          return (
            <button
              key={i}
              onClick={() => onToggleSkill(skill.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: active ? '#2C1A0E' : '#EDE0D0',
                color: active ? '#F5EFE6' : '#2C1A0E',
                border: active ? '2px solid #9B7B5A' : '2px solid transparent',
                borderRadius: 40,
                padding: '10px 18px',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
            >
              <div style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: SKILL_COLORS[i],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <img src={skill.img} alt={skill.name} style={{ width: 16, height: 16, objectFit: 'contain' }} />
              </div>
              {skill.name}
              <span style={{ fontSize: 11, opacity: 0.7 }}>
                {active ? '✓' : `+${fmt(PRICES.skill)}`}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
