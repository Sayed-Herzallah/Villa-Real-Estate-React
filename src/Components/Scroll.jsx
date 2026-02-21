import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <button
        onClick={scrollUp}
        style={{
          position: 'fixed', bottom: '32px', right: '32px', zIndex: 999,
          width: '48px', height: '48px', borderRadius: '50%',
          background: '#f35525', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(243,85,37,0.5)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: visible ? 'all' : 'none',
          transition: 'opacity 0.3s, transform 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#d94420'}
        onMouseLeave={e => e.currentTarget.style.background = '#f35525'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </>
  );
}