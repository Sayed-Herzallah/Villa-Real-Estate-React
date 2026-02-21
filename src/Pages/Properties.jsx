import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { propertiesData } from '../Data/AllData';

const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='260'%3E%3Crect fill='%23f0f4ff' width='400' height='260'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='13' fill='%23aab' text-anchor='middle' dy='.3em'%3EProperty Image%3C/text%3E%3C/svg%3E";

const PAGE_BG = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80";

const ITEMS_PER_PAGE = 9;

const filters = [
  { id: 'all',          label: 'Show All'    },
  { id: 'Apartment',    label: 'Apartment'   },
  { id: 'Luxury Villa', label: 'Villa House' },
  { id: 'Penthouse',    label: 'Penthouse'   },
];

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeFilter === 'all'
    ? propertiesData
    : propertiesData.filter(p => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((currentPage-1)*ITEMS_PER_PAGE, currentPage*ITEMS_PER_PAGE);

  const handleFilter = (id) => { setActiveFilter(id); setCurrentPage(1); };
  const handlePage   = (p)  => { if (p >= 1 && p <= totalPages) setCurrentPage(p); };

  return (
    <div style={{ paddingTop: '109px' }}>

      {/* ── Page Heading ── */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(${PAGE_BG})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '70px 0', textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: '5px', padding: '5px 18px', marginBottom: '14px',
        }}>
          <span style={{ color: '#fff', fontSize: '12px', letterSpacing: '1px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>HOME</Link>
            {' / '}
            <span>PROPERTIES</span>
          </span>
        </div>
        <h3 style={{ color: '#fff', fontSize: '32px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', margin: 0 }}>
          Properties
        </h3>
      </div>

      {/* ── Section ── */}
      <section style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">

          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => handleFilter(f.id)} style={{
                padding: '9px 22px', borderRadius: '5px', border: 'none', cursor: 'pointer',
                fontWeight: 600, fontSize: '13px',
                background: activeFilter === f.id ? '#f35525' : '#1e1e1e',
                color: '#fff', transition: 'background 0.25s',
              }}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="row">
            {paginated.map(prop => (
              <div key={prop.id} className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '28px' }}>
                <div
                  style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 18px rgba(0,0,0,0.08)', overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.13)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.08)'; }}
                >
                  <img
                    src={process.env.PUBLIC_URL + '/' + prop.image}
                    alt={prop.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
                  />
                  <div style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ background: '#fff0eb', color: '#f35525', padding: '3px 11px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>
                        {prop.category}
                      </span>
                      <span style={{ color: '#f35525', fontWeight: 700, fontSize: '15px' }}>{prop.price}</span>
                    </div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#1e1e1e', marginBottom: '10px', lineHeight: '1.4' }}>
                      <Link to="/property-details" style={{ color: 'inherit', textDecoration: 'none' }}>{prop.title}</Link>
                    </h4>
                    <div style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>
                      Bedrooms: <strong>{prop.bedrooms}</strong>&nbsp;&nbsp;
                      Bathrooms: <strong>{prop.bathrooms}</strong>
                      {prop.area && <>&nbsp;&nbsp;Area: <strong>{prop.area}</strong></>}
                    </div>
                    <div style={{ fontSize: '12px', color: '#555', marginBottom: '16px' }}>
                      Floor: <strong>{prop.floor}</strong>&nbsp;&nbsp;
                      Parking: <strong>{prop.parking}</strong>
                    </div>
                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '14px', textAlign: 'center' }}>
                      <Link to="/property-details" style={{
                        display: 'inline-block', background: '#1e1e1e', color: '#fff',
                        padding: '9px 26px', borderRadius: '25px', fontSize: '12px', fontWeight: 600,
                        textDecoration: 'none', transition: 'background 0.3s',
                      }}
                        onMouseEnter={e => e.target.style.background = '#f35525'}
                        onMouseLeave={e => e.target.style.background = '#1e1e1e'}
                      >
                        Schedule a visit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
              <button onClick={() => handlePage(currentPage-1)} disabled={currentPage===1} style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #ddd',
                background: '#fff', cursor: currentPage===1 ? 'not-allowed' : 'pointer',
                opacity: currentPage===1 ? 0.4 : 1, fontSize: '18px', color: '#555',
              }}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i+1).map(p => (
                <button key={p} onClick={() => handlePage(p)} style={{
                  width: '36px', height: '36px', borderRadius: '50%', border: 'none',
                  cursor: 'pointer', background: p===currentPage ? '#f35525' : '#1e1e1e',
                  color: '#fff', fontWeight: 700, fontSize: '13px',
                }}>
                  {p}
                </button>
              ))}
              <button onClick={() => handlePage(currentPage+1)} disabled={currentPage===totalPages} style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #ddd',
                background: '#fff', cursor: currentPage===totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage===totalPages ? 0.4 : 1, fontSize: '18px', color: '#555',
              }}>›</button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}