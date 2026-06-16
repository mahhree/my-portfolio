import { IMAGES, fmt } from '../constants/data';

const NavBar = ({ total, onOpenReceipt }) => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#F5EFE6',
      borderBottom: '1px solid #E0D4C3',
      height: 90,
    }}>

      {/* LOGO — truly centered against the full nav width */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
      }}>
        <img
          src={IMAGES.cafeLogo}
          alt="Marie's Café"
          style={{ height: 100, objectFit: 'contain', pointerEvents: 'auto' }}
        />
      </div>
{/* MY TAB — pinned to top right */}
<div style={{
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 102,
}}>
  <button
    onClick={onOpenReceipt}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: '#2C1A0E',
      color: '#F5EFE6',
      border: 'none',
      borderRadius: 30,
      padding: '8px 14px',
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: 'nowrap',
    }}
  >
    <span>My Tab</span>
    <span style={{
      background: '#9B7B5A',
      borderRadius: 20,
      padding: '2px 8px',
      fontSize: 12,
      fontWeight: 700,
    }}>
      {fmt(total)}
    </span>
  </button>
</div>

    </nav>
  );
};

export default NavBar;