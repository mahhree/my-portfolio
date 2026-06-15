const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#2C1A0E',
      color: '#F5EFE6',
      padding: '10px 24px',
      borderRadius: 30,
      fontSize: 13,
      fontFamily: 'CentraNo2, Arial, sans-serif',
      zIndex: 9999,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      animation: 'fadeIn 0.2s ease',
      whiteSpace: 'nowrap',
    }}>
      ✓ Added: {message}
    </div>
  );
};

export default Toast;
