import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { propertiesData } from '../Data/AllData';

const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='260'%3E%3Crect fill='%23f0f4ff' width='400' height='260'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='13' fill='%23aab' text-anchor='middle' dy='.3em'%3EProperty Image%3C/text%3E%3C/svg%3E";

const PAGE_BG = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80";

const BedIcon   = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f35525" strokeWidth="1.5"><path d="M2 20v-8a2 2 0 012-2h16a2 2 0 012 2v8"/><path d="M2 14h20M7 14V9a1 1 0 011-1h8a1 1 0 011 1v5"/></svg>;
const BathIcon  = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f35525" strokeWidth="1.5"><path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3z"/><path d="M6 12V6a2 2 0 012-2h1v2"/><path d="M8 20v2M16 20v2"/></svg>;
const AreaIcon  = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f35525" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const FloorIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f35525" strokeWidth="1.5"><path d="M3 21h18M3 7l9-4 9 4M4 11v10M20 11v10M8 11v10M16 11v10M12 11v10"/></svg>;
const ParkIcon  = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f35525" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>;

export default function PropertyDetails() {
  const property = propertiesData[0];
  const [openAccordion, setOpenAccordion] = useState('features');

  const accordionItems = [
    {
      id: 'features', title: 'Property Features',
      body: <ul style={{ paddingLeft: '20px', margin: 0, color: '#555', fontSize: '14px', lineHeight: '2.2' }}>
        <li>Swimming Pool &amp; Gym</li>
        <li>24/7 Security System</li>
        <li>Smart Home Technology</li>
        <li>Private Garden &amp; Terrace</li>
      </ul>,
    },
    {
      id: 'floor', title: 'Floor Plans',
      body: <p style={{ margin: 0, color: '#555', fontSize: '14px', lineHeight: '26px' }}>Detailed floor plans available upon request. Contact our agent for the full layout documentation.</p>,
    },
    {
      id: 'payment', title: 'Payment Options',
      body: <p style={{ margin: 0, color: '#555', fontSize: '14px', lineHeight: '26px' }}>Multiple payment options available including bank financing, cash payment, and installment plans.</p>,
    },
  ];

  const sidebarItems = [
    { icon: <BedIcon />,   title: `${property.bedrooms} Bedrooms`,  sub: 'Beds'         },
    { icon: <BathIcon />,  title: `${property.bathrooms} Bathrooms`,sub: 'Baths'        },
    { icon: <AreaIcon />,  title: property.area,                    sub: 'Total Area'   },
    { icon: <FloorIcon />, title: `Floor ${property.floor}`,        sub: 'Floor Number' },
    { icon: <ParkIcon />,  title: property.parking,                 sub: 'Parking'      },
  ];

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
            <Link to="/properties" style={{ color: '#fff', textDecoration: 'none' }}>PROPERTIES</Link>
            {' / '}
            <span>DETAILS</span>
          </span>
        </div>
        <h3 style={{ color: '#fff', fontSize: '32px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', margin: 0 }}>
          Property Details
        </h3>
      </div>

      {/* ── Main Section ── */}
      <section style={{ padding: '70px 0', background: '#fff' }}>
        <div className="container">
          <div className="row">

            {/* Left */}
            <div className="col-lg-8 col-md-7" style={{ marginBottom: '40px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '28px' }}>
                <img
                  src={process.env.PUBLIC_URL + '/' + property.image}
                  alt={property.title}
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                  onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
                />
              </div>
              <span style={{ background: '#fff0eb', color: '#f35525', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, display: 'inline-block', marginBottom: '12px' }}>
                {property.category}
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1e1e1e', marginBottom: '16px' }}>{property.title}</h2>
              <p style={{ color: '#7a7a7a', lineHeight: '30px', fontSize: '14px', marginBottom: '30px' }}>
                This stunning luxury property offers breathtaking views and world-class amenities. Designed with the finest materials and attention to detail, this property represents the pinnacle of modern living.
              </p>
              {accordionItems.map(item => (
                <div key={item.id} style={{ border: '1px solid #eee', borderRadius: '8px', marginBottom: '12px', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '15px 20px',
                      background: '#fff', border: 'none', cursor: 'pointer',
                      fontWeight: 700, fontSize: '15px',
                      color: openAccordion === item.id ? '#f35525' : '#1e1e1e',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}
                  >
                    {item.title}
                    <span style={{ fontSize: '22px', color: '#f35525', lineHeight: 1, transform: openAccordion === item.id ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
                  </button>
                  {openAccordion === item.id && (
                    <div style={{ padding: '6px 20px 18px', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                      {item.body}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4 col-md-5" style={{ marginBottom: '40px' }}>
              <div style={{ border: '1px solid #eee', borderRadius: '14px', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', overflow: 'hidden', position: 'sticky', top: '120px' }}>
                <div style={{ background: '#f35525', padding: '22px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>Listing Price</div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>{property.price}</div>
                </div>
                {sidebarItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 24px', borderBottom: i < sidebarItems.length-1 ? '1px solid #f0f0f0' : 'none' }}>
                    <div style={{ width: '52px', height: '52px', minWidth: '52px', background: '#fff5f2', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e1e1e', marginBottom: '2px' }}>{item.title}</div>
                      <div style={{ fontSize: '12px', color: '#aaa' }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
                <div style={{ padding: '20px 24px' }}>
                  <Link to="/contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    background: '#1e1e1e', color: '#fff', padding: '14px 20px',
                    borderRadius: '30px', fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                    transition: 'background 0.3s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f35525'}
                    onMouseLeave={e => e.currentTarget.style.background = '#1e1e1e'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}