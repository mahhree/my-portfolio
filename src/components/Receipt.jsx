import { fmt } from '../constants/data';

const Receipt = ({ orderItems, total, onClose, onClear }) => {
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300 }}
      />

      {/* DRAWER */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 480,
        background: '#FDF8F2',
        borderRadius: '20px 20px 0 0',
        zIndex: 400,
        padding: '0 0 32px',
        boxShadow: '0 -8px 40px rgba(0,0,0,0.25)',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}>
        {/* RECEIPT HEADER */}
        <div style={{ textAlign: 'center', padding: '24px 32px 16px', borderBottom: '1px dashed #D4C4B0' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: '#9B7B5A', textTransform: 'uppercase', marginBottom: 4 }}>
            Marie's Café
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#2C1A0E' }}>Your Receipt</div>
          <div style={{ fontSize: 12, color: '#9B7B5A', marginTop: 4 }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* LINE ITEMS */}
        <div style={{ padding: '16px 32px' }}>
          {orderItems.map((item, i) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid #EDE0D0',
                fontSize: 13,
                color: '#2C1A0E',
              }}
            >
              <span>{i + 1}. {item.label}</span>
              <span style={{ fontWeight: 700, color: '#5C3D2E' }}>{fmt(item.price)}</span>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div style={{ padding: '0 32px', borderTop: '2px dashed #D4C4B0', marginTop: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0 4px' }}>
            <span style={{ fontSize: 13, color: '#9B7B5A' }}>Subtotal</span>
            <span style={{ fontSize: 13, color: '#9B7B5A' }}>{fmt(total)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0 16px' }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#2C1A0E' }}>Total</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#2C1A0E' }}>{fmt(total)}</span>
          </div>
          <div style={{ textAlign: 'center', fontSize: 12, color: '#9B7B5A', fontStyle: 'italic', marginBottom: 20 }}>
            Thanks for stopping by! ☕
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={onClose}
              style={{
                flex: 1,
                background: '#EDE0D0',
                border: 'none',
                borderRadius: 30,
                padding: '12px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                color: '#2C1A0E',
              }}
            >
              Close
            </button>
            <button
              onClick={onClear}
              style={{
                flex: 1,
                background: '#2C1A0E',
                border: 'none',
                borderRadius: 30,
                padding: '12px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                color: '#F5EFE6',
              }}
            >
              Clear Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Receipt;
