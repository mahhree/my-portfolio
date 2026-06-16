import { useState } from 'react';
import { PRICES } from './constants/data';
import { fmt } from './constants/data';

import NavBar   from './components/NavBar';
import Toast    from './components/Toast';
import Hero     from './components/Hero';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Work     from './components/Work';
import Resume   from './components/Resume';
import Receipt  from './components/Receipt';

const App = () => {
  const [orderItems,    setOrderItems]    = useState([]);
  const [receiptOpen,   setReceiptOpen]   = useState(false);
  const [activeSkills,  setActiveSkills]  = useState([]);
  const [addedProjects, setAddedProjects] = useState([]);
  const [toast,         setToast]         = useState(null);

  const total = orderItems.reduce((sum, item) => sum + item.price, 0);

  const addItem = (label, price) => {
    setOrderItems((prev) => [...prev, { id: Date.now() + Math.random(), label, price }]);
    setToast(label);
    setTimeout(() => setToast(null), 2000);
  };

  const toggleSkill = (name) => {
    if (activeSkills.includes(name)) {
      setActiveSkills((prev) => prev.filter((s) => s !== name));
      setOrderItems((prev) => {
        const idx = prev.map((i) => i.label).lastIndexOf(`Add-on: ${name}`);
        if (idx === -1) return prev;
        return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
      });
    } else {
      setActiveSkills((prev) => [...prev, name]);
      addItem(`Add-on: ${name}`, PRICES.skill);
    }
  };

  const addProject = (title) => {
    if (addedProjects.includes(title)) return;
    setAddedProjects((prev) => [...prev, title]);
    addItem(title, PRICES.project);
  };

  const clearOrder = () => {
    setOrderItems([]);
    setActiveSkills([]);
    setAddedProjects([]);
    setReceiptOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F5EFE6', color: '#2C1A0E', paddingBottom: 80 }}>

      <Toast message={toast} />

      <NavBar
        total={total}
        onOpenReceipt={() => setReceiptOpen(true)}
      />

      <Hero onAddItem={addItem} />

      <Skills
        activeSkills={activeSkills}
        onToggleSkill={toggleSkill}
      />

      <Projects
        addedProjects={addedProjects}
        onAddProject={addProject}
      />

      <Work onAddItem={addItem} />

      <Resume onAddItem={addItem} />

      {/* FOOTER */}
      <footer style={{
        background: '#1A0F08',
        color: 'rgba(255,255,255,0.35)',
        textAlign: 'center',
        padding: '22px',
        fontSize: 12,
      }}>
        © {new Date().getFullYear()} Marie Karibyan · Built with React ☕
      </footer>

      {/* STICKY RECEIPT BAR */}
      {orderItems.length > 0 && !receiptOpen && (
        <div
          onClick={() => setReceiptOpen(true)}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#2C1A0E',
            color: '#F5EFE6',
            padding: '14px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            zIndex: 200,
            borderTop: '2px solid #9B7B5A',
          }}
        >
          <span style={{ fontSize: 13 }}>
            🧾 {orderItems.length} item{orderItems.length !== 1 ? 's' : ''} on your tab
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 16, fontWeight: 700 }}>{fmt(total)}</span>
            <span style={{ fontSize: 12, background: '#9B7B5A', padding: '4px 12px', borderRadius: 20 }}>
              View Receipt ↑
            </span>
          </span>
        </div>
      )}

      {/* RECEIPT DRAWER */}
      {receiptOpen && (
        <Receipt
          orderItems={orderItems}
          total={total}
          onClose={() => setReceiptOpen(false)}
          onClear={clearOrder}
        />
      )}
    </div>
  );
};

export default App;
