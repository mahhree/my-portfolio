import { IMAGES, fmt } from '../constants/data';

const NavBar = ({ total, onOpenReceipt }) => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 48px',
      background: '#F5EFE6',
      borderBottom: '1px solid #E0D4C3',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* LOGO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src={IMAGES.coffeeSmallLogo}
          alt="logo"
          style={{ width: 32, height: 32, objectFit: 'contain' }}
        />
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: 1 }}>Marie's Café</span>
      </div>

      {/* NAV LINKS */}
      <div style={{ display: 'flex', gap: 32, fontSize: 14, color: '#5C3D2E' }}>
        {['About', 'Skills', 'Projects', 'Work'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            style={{ color: '#5C3D2E', fontWeight: 500 }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* TAB TOTAL */}
      <button
        onClick={onOpenReceipt}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#2C1A0E',
          color: '#F5EFE6',
          border: 'none',
          borderRadius: 30,
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <span>🧾 My Tab</span>
        <span style={{
          background: '#9B7B5A',
          borderRadius: 20,
          padding: '2px 10px',
          fontSize: 13,
          fontWeight: 700,
        }}>
          {fmt(total)}
        </span>
      </button>
    </nav>
  );
};

export default NavBar;
