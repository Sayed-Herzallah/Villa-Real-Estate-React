import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/',                 label: 'Home'             },
    { to: '/properties',       label: 'Properties'       },
    { to: '/products',         label: 'Products'         },
    { to: '/property-details', label: 'Property Details' },
    { to: '/contact',          label: 'Contact Us'       },
  ];

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: '#fff',
        boxShadow: scrolled ? '0 2px 15px rgba(0,0,0,0.1)' : '0 1px 0 #eee',
        transition: 'box-shadow 0.3s',
      }}>

        {/* Top Bar */}
        <div style={{ borderBottom: '1px solid #f0f0f0', padding: '7px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#555' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#f35525">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  info@company.com
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#555' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#f35525">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Sunny Isles Beach, FL 33160
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
                  'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                  'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
                  'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z',
                ].map((d, i) => (
                  <a key={i} href="#" style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    border: '1px solid #ddd', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: '#999',
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#f35525'; e.currentTarget.style.color = '#f35525'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.color = '#999'; }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div style={{ height: '68px', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              {/* Logo */}
              <Link to="/" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '22px', fontWeight: 900, color: '#1e1e1e', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Villa
                </span>
              </Link>

              {/* Desktop Links */}
              <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {navLinks.map(link => (
                  <Link key={link.to} to={link.to} style={{
                    padding: '8px 15px', fontSize: '14px', fontWeight: 600,
                    color: isActive(link.to) ? '#f35525' : '#1e1e1e',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => { if (!isActive(link.to)) e.target.style.color = '#f35525'; }}
                    onMouseLeave={e => { if (!isActive(link.to)) e.target.style.color = '#1e1e1e'; }}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* ✅ Cart Button */}
                <Link to="/cart" style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: '#1a1a2e', color: '#fff',
                  padding: '10px 16px', borderRadius: '25px',
                  fontSize: '13px', fontWeight: 700,
                  textDecoration: 'none', marginLeft: '8px',
                  position: 'relative', transition: 'background 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f35525'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1a1a2e'}
                >
                  🛒 Cart
                  {totalItems > 0 && (
                    <span style={{
                      background: '#f35525', color: '#fff',
                      borderRadius: '50%', width: '20px', height: '20px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 900,
                    }}>{totalItems}</span>
                  )}
                </Link>

                {/* Schedule Visit */}
                <Link to="/contact" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#f35525', color: '#fff',
                  padding: '10px 18px', borderRadius: '25px',
                  fontSize: '13px', fontWeight: 700,
                  textDecoration: 'none', marginLeft: '6px',
                  transition: 'background 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#d94420'}
                  onMouseLeave={e => e.currentTarget.style.background = '#f35525'}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                  Schedule a visit
                </Link>
              </nav>

              {/* Hamburger */}
              <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}
                style={{ display: 'none', flexDirection: 'column', gap: '5px', width: '40px', height: '40px', background: 'none', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', padding: '8px' }}
              >
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    display: 'block', width: '20px', height: '2px', background: '#1e1e1e',
                    transform: menuOpen && i===0 ? 'translateY(7px) rotate(45deg)' : menuOpen && i===2 ? 'translateY(-7px) rotate(-45deg)' : 'none',
                    opacity: menuOpen && i===1 ? 0 : 1,
                    transition: 'all 0.3s',
                  }}/>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div onClick={() => setMenuOpen(false)} style={{
        position: 'fixed', inset: 0, zIndex: 998,
        background: 'rgba(0,0,0,0.4)',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity 0.3s',
      }}/>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', top: '109px', left: 0, right: 0, zIndex: 999,
        background: '#fff', borderTop: '1px solid #eee',
        maxHeight: menuOpen ? '500px' : '0',
        overflow: 'hidden', transition: 'max-height 0.4s ease',
        boxShadow: menuOpen ? '0 8px 20px rgba(0,0,0,0.1)' : 'none',
      }}>
        <div className="container" style={{ padding: '10px 15px 20px' }}>
          {navLinks.map((link, i, arr) => (
            <Link key={link.to} to={link.to} style={{
              display: 'block', padding: '13px 0',
              borderBottom: i < arr.length-1 ? '1px solid #f0f0f0' : 'none',
              fontSize: '15px', fontWeight: 600, textDecoration: 'none',
              color: isActive(link.to) ? '#f35525' : '#1e1e1e',
            }}>
              {link.label}
            </Link>
          ))}
          {/* Mobile Cart Link */}
          <Link to="/cart" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '13px 0', borderTop: '1px solid #f0f0f0',
            fontSize: '15px', fontWeight: 600, textDecoration: 'none',
            color: isActive('/cart') ? '#f35525' : '#1e1e1e',
          }}>
            🛒 Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#f35525', color: '#fff',
            padding: '11px 22px', borderRadius: '25px',
            fontSize: '13px', fontWeight: 700,
            textDecoration: 'none', marginTop: '16px',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            Schedule a visit
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 992px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}