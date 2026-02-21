import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Home/Banner';
import { propertiesData, bestDealTabs } from '../Data/AllData';

const FALLBACK_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='260'%3E%3Crect fill='%23f0f4ff' width='400' height='260'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='13' fill='%23aab' text-anchor='middle' dy='.3em'%3EProperty Image%3C/text%3E%3C/svg%3E";

// ✅ Unsplash — بتظهر دايماً
const FEATURED_IMG = "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80";

// ✅ الايقونات الأصلية من الـ template — SVG بديل لو الملف مش موجود
const icons = [
  {
    img: '/assets/images/icon-01.png',
    svg: <svg width="34" height="34" viewBox="0 0 64 64" fill="none" stroke="#f35525" strokeWidth="2"><rect x="8" y="8" width="48" height="48" rx="4"/><path d="M8 24h48M24 56V24"/><rect x="30" y="32" width="18" height="14" rx="2"/></svg>,
    title: '250 m2', sub: 'Total Flat Space',
  },
  {
    img: '/assets/images/icon-02.png',
    svg: <svg width="34" height="34" viewBox="0 0 64 64" fill="none" stroke="#f35525" strokeWidth="2"><path d="M20 56V12a4 4 0 014-4h24l8 8v40a4 4 0 01-4 4H24a4 4 0 01-4-4z"/><path d="M44 8v12h12M28 28h16M28 36h16M28 44h10"/></svg>,
    title: 'Contract', sub: 'Contract Ready',
  },
  {
    img: '/assets/images/icon-03.png',
    svg: <svg width="34" height="34" viewBox="0 0 64 64" fill="none" stroke="#f35525" strokeWidth="2"><rect x="6" y="18" width="52" height="34" rx="4"/><path d="M6 30h52"/><path d="M20 42h6M38 42h6"/></svg>,
    title: 'Payment', sub: 'Payment Process',
  },
  {
    img: '/assets/images/icon-04.png',
    svg: <svg width="34" height="34" viewBox="0 0 64 64" fill="none" stroke="#f35525" strokeWidth="2"><path d="M32 4L8 16v16c0 16 10.67 30.93 24 34.67C45.33 62.93 56 48 56 32V16L32 4z"/><path d="M22 32l8 8 14-14"/></svg>,
    title: 'Safety', sub: '24/7 Under Control',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('appartment');
  const [openAccordion, setOpenAccordion] = useState('one');
  const [iconErrors, setIconErrors] = useState({});
  const activeTabData = bestDealTabs.find(t => t.id === activeTab);

  const accordionItems = [
    {
      id: 'one',
      title: 'Best useful links ?',
      body: (
        <p style={{ margin: 0, fontSize: '14px', color: '#555', lineHeight: '26px' }}>
          Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business.
          TemplateMo provides you the{' '}
          <a href="#" style={{ color: '#f35525' }}>best free CSS templates</a>
          {' '}in the world. Please tell your friends about it.
        </p>
      ),
    },
    {
      id: 'two',
      title: 'How does this work ?',
      body: (
        <p style={{ margin: 0, fontSize: '14px', color: '#555', lineHeight: '26px' }}>
          We help you find the perfect property through our expert consultation process,
          tailored to your specific needs and budget.
        </p>
      ),
    },
    {
      id: 'three',
      title: 'Why is Villa Agency the best ?',
      body: (
        <p style={{ margin: 0, fontSize: '14px', color: '#555', lineHeight: '26px' }}>
          With 12 years of experience and 24 awards, we offer unmatched service and expertise
          in luxury real estate.
        </p>
      ),
    },
  ];

  return (
    <div style={{ paddingTop: '109px' }}>

      <Banner />

      {/* ============================================
          SECTION 1 — FEATURED
      ============================================ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="row align-items-start">

            {/* Col 1 — صورة */}
            <div className="col-lg-4 col-md-12" style={{ marginBottom: '40px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={FEATURED_IMG}
                  alt="Featured"
                  style={{ borderRadius: '10px', width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
                {/* Orange circle — bottom-left */}
                <div style={{
                  position: 'absolute', left: '-18px', bottom: '-18px',
                  width: '76px', height: '76px', backgroundColor: '#f35525',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(243,85,37,0.4)', zIndex: 2,
                }}>
                  {/* ✅ icon-01 — لو مش موجود بيطلع SVG */}
                  {iconErrors[0] ? (
                    <svg width="30" height="30" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="2.5">
                      <rect x="8" y="8" width="48" height="48" rx="4"/><path d="M8 24h48M24 56V24"/><rect x="30" y="32" width="18" height="14" rx="2"/>
                    </svg>
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + '/assets/images/icon-01.png'}
                      alt=""
                      style={{ width: '36px', height: '36px', filter: 'brightness(0) invert(1)' }}
                      onError={() => setIconErrors(p => ({ ...p, 0: true }))}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Col 2 — Heading + Accordion */}
            <div className="col-lg-4 col-md-12" style={{ paddingLeft: '40px', paddingRight: '16px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <div style={{ width: '3px', height: '16px', background: '#f35525', borderRadius: '2px' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#f35525', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Featured</span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1e1e1e', lineHeight: '1.35', marginBottom: '26px' }}>
                Best Appartment<br />&amp; Sea View
              </h2>
              <div>
                {accordionItems.map((item) => (
                  <div key={item.id} style={{ border: '1px solid #eee', borderRadius: '8px', marginBottom: '10px', overflow: 'hidden' }}>
                    <button
                      onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                      style={{
                        width: '100%', textAlign: 'left', padding: '13px 16px',
                        background: '#fff', border: 'none', cursor: 'pointer',
                        fontWeight: 600, fontSize: '14px',
                        color: openAccordion === item.id ? '#f35525' : '#1e1e1e',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      }}
                    >
                      {item.title}
                      <span style={{
                        fontSize: '20px', color: '#f35525', lineHeight: 1,
                        transform: openAccordion === item.id ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.2s',
                      }}>+</span>
                    </button>
                    {openAccordion === item.id && (
                      <div style={{ padding: '4px 16px 14px', background: '#fff', borderTop: '1px solid #f5f5f5' }}>
                        {item.body}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3 — Info Card */}
            <div className="col-lg-4 col-md-12" style={{ paddingLeft: '16px', marginBottom: '40px' }}>
              <div style={{ border: '1px solid #eee', borderRadius: '14px', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                {icons.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '18px',
                    padding: '20px 24px',
                    borderBottom: i < icons.length - 1 ? '1px solid #f0f0f0' : 'none',
                  }}>
                    <div style={{ width: '56px', height: '56px', minWidth: '56px', background: '#fff5f2', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {iconErrors[i + 1] ? item.svg : (
                        <img
                          src={process.env.PUBLIC_URL + item.img}
                          alt={item.title}
                          style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                          onError={() => setIconErrors(p => ({ ...p, [i + 1]: true }))}
                        />
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#1e1e1e', marginBottom: '3px' }}>{item.title}</div>
                      <div style={{ fontSize: '12px', color: '#aaa' }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2 — VIDEO
      ============================================ */}
      <section className="video">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6 style={{ color: '#f35525' }}>Video</h6>
                <h2 style={{ color: '#fff' }}>Get Closer View &amp;<br />Different Feeling</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="video-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10">
              <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/video-frame.jpg'}
                  alt="Video"
                  style={{ width: '100%', display: 'block', minHeight: '280px', objectFit: 'cover', background: '#222' }}
                  onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
                />
                <a href="#" style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                  width: '60px', height: '60px', background: '#fff', borderRadius: '50%',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#f35525', fontSize: '20px',
                  outline: '14px solid rgba(243,85,37,0.35)', zIndex: 2,
                }}>
                  <i className="fa fa-play" style={{ marginLeft: '3px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          SECTION 3 — FUN FACTS
      ============================================ */}
      <section className="fun-facts">
        <div className="container">
          <div className="row justify-content-center">
            {[
              { num: '34', l1: 'Buildings', l2: 'Finished Now' },
              { num: '12', l1: 'Years',     l2: 'Experience'  },
              { num: '24', l1: 'Awards',    l2: 'Won Since'   },
            ].map((f, i) => (
              <div key={i} className="col-lg-4 col-md-6 text-center" style={{ marginBottom: '30px' }}>
                <div className="counter">
                  <h2>{f.num}</h2>
                  <p>{f.l1}<br />{f.l2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4 — BEST DEAL
      ============================================ */}
      <section style={{ padding: '70px 0', background: '#f8f8f8' }}>
        <div className="container">
          <div className="row align-items-center" style={{ marginBottom: '35px' }}>
            <div className="col-lg-6 col-md-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <div style={{ width: '3px', height: '16px', background: '#f35525', borderRadius: '2px' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#f35525', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Best Deal</span>
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1e1e1e', lineHeight: '1.35', margin: 0 }}>
                Find Your Best Deal<br />Right Now!
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', flexWrap: 'wrap', marginTop: '10px' }}>
                {bestDealTabs.map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                    background: activeTab === tab.id ? '#f35525' : '#1e1e1e',
                    color: '#fff', border: 'none', borderRadius: '6px',
                    height: '46px', padding: '0 22px',
                    fontWeight: 600, fontSize: '14px', cursor: 'pointer', transition: 'background 0.3s',
                  }}>{tab.label}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Info Card */}
            <div className="col-lg-3 col-md-5 col-sm-12" style={{ marginBottom: '30px' }}>
              <div style={{ borderRadius: '12px', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                {activeTabData.info.map((item, i) => (
                  <div key={i} style={{
                    padding: '16px 22px',
                    borderBottom: i < activeTabData.info.length - 1 ? '1px solid #f5f5f5' : 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: '13px', color: '#aaa' }}>{item.label}</span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#1e1e1e' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6 col-md-7 col-sm-12" style={{ marginBottom: '30px' }}>
              <img
                src={process.env.PUBLIC_URL + '/' + activeTabData.image}
                alt={activeTabData.label}
                style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', height: '340px', display: 'block' }}
                onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
              />
            </div>

            {/* Text + Button */}
            <div className="col-lg-3 col-md-12 col-sm-12" style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#1e1e1e', marginBottom: '16px' }}>{activeTabData.title}</h4>
              <p style={{ color: '#7a7a7a', lineHeight: '28px', fontSize: '14px', marginBottom: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
              </p>
              <p style={{ color: '#7a7a7a', lineHeight: '28px', fontSize: '14px', marginBottom: '28px' }}>
                When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
              </p>
              <Link to="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: '0', textDecoration: 'none' }}>
                <span style={{
                  width: '46px', height: '46px', background: '#f35525',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                </span>
                <span style={{
                  background: '#1e1e1e', color: '#fff',
                  padding: '12px 22px 12px 20px', borderRadius: '0 25px 25px 0',
                  fontSize: '14px', fontWeight: 600,
                }}>
                  Schedule a visit
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5 — PROPERTIES
      ============================================ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
              <div style={{ width: '3px', height: '16px', background: '#f35525', borderRadius: '2px' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#f35525', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Properties</span>
            </div>
            <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#1e1e1e' }}>
              We Provide The Best<br />Property You Like
            </h2>
          </div>
          <div className="row">
            {propertiesData.map(prop => (
              <div key={prop.id} className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '30px' }}>
                <div
                  style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)'; }}
                >
                  <img
                    src={process.env.PUBLIC_URL + '/' + prop.image}
                    alt={prop.title}
                    style={{ width: '100%', height: '210px', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
                  />
                  <div style={{ padding: '20px 22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ background: '#fff0eb', color: '#f35525', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>{prop.category}</span>
                      <span style={{ color: '#f35525', fontWeight: 700, fontSize: '16px' }}>{prop.price}</span>
                    </div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1e1e1e', marginBottom: '12px', lineHeight: '1.4' }}>
                      <Link to="/property-details" style={{ color: 'inherit', textDecoration: 'none' }}>{prop.title}</Link>
                    </h4>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '5px' }}>
                      Bedrooms: <strong>{prop.bedrooms}</strong>&nbsp;&nbsp;
                      Bathrooms: <strong>{prop.bathrooms}</strong>
                      {prop.area && <>&nbsp;&nbsp;Area: <strong>{prop.area}</strong></>}
                    </div>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '18px' }}>
                      Floor: <strong>{prop.floor}</strong>&nbsp;&nbsp;
                      Parking: <strong>{prop.parking}</strong>
                    </div>
                    <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px', textAlign: 'center' }}>
                      <Link to="/property-details"
                        style={{ display: 'inline-block', background: '#1e1e1e', color: '#fff', padding: '10px 28px', borderRadius: '25px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', transition: 'background 0.3s' }}
                        onMouseEnter={e => e.target.style.background = '#f35525'}
                        onMouseLeave={e => e.target.style.background = '#1e1e1e'}
                      >Schedule a visit</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT
      ============================================ */}
      <section className="contact">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6 style={{ color: '#f35525' }}>Contact Us</h6>
                <h2 style={{ color: '#fff' }}>Get In Touch With<br />Our Agents</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
              <div style={{ borderRadius: '10px', overflow: 'hidden', height: '300px', marginBottom: '20px' }}>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.476!2d-80.1220!3d25.9331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sSunny+Isles!5e0!3m2!1sen!2sus!4v1" width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
              </div>
              <div className="row">
                {[
                  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#f35525"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>, title: '010-020-0340', sub: 'Phone Number' },
                  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#f35525"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, title: 'info@villa.co', sub: 'Email Address' },
                ].map((card, i) => (
                  <div key={i} className="col-6">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.08)', padding: '16px' }}>
                      <div style={{ width: '46px', height: '46px', minWidth: '46px', background: '#fff5f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{card.icon}</div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e1e1e' }}>{card.title}</div>
                        <div style={{ fontSize: '12px', color: '#aaa' }}>{card.sub}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form id="contact-form" onSubmit={e => e.preventDefault()}>
                <label>Last Name</label>
                <input type="text" placeholder="Your Name" />
                <label>Email Address</label>
                <input type="email" placeholder="Your Email" />
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
                <label>Message</label>
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}