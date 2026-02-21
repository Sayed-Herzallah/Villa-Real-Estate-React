import React, { useState } from 'react';

const slides = [
  {
    id: 1,
image: `${process.env.PUBLIC_URL}/assets/images/hero-01.jpg`,gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    location: 'Toronto', country: 'Canada',
    line1: 'Hurry!', line2: 'Get the Best Villa for you',
  },
  {
    id: 2,
image: `${process.env.PUBLIC_URL}/assets/images/hero-02.jpg`,    gradient: 'linear-gradient(135deg, #1e3c2f 0%, #2d6a4f 50%, #1b4332 100%)',
    location: 'Melbourne', country: 'Australia',
    line1: 'Be Quick!', line2: 'Get the best villa in town',
  },
  {
    id: 3,
image: `${process.env.PUBLIC_URL}/assets/images/hero-03.jpg`,
    gradient: 'linear-gradient(135deg, #2d1b3d 0%, #4a1942 50%, #6b2d6b 100%)',
    location: 'Miami', country: 'South Florida',
    line1: 'Act Now!', line2: 'Get the highest level penthouse',
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState({});

  const slide = slides[current];
  const hasImage = !imgError[current];

  const bannerStyle = hasImage
    ? { backgroundImage: `url(${slide.image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }
    : { background: slide.gradient };

  return (
    <div style={{ width: '100%', overflowX: 'hidden', maxWidth: '100vw' }}>
      <div style={{
        ...bannerStyle,
        position: 'relative',
        width: '100%',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        boxSizing: 'border-box',
      }}>
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 0 }} />

        {/* Hidden img لكشف الخطأ */}
        <img src={slide.image} alt="" style={{ display: 'none' }}
          onError={() => setImgError(prev => ({ ...prev, [current]: true }))} />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#fff', borderRadius: '4px',
            padding: '5px 12px', marginBottom: '20px',
            fontSize: '14px', fontWeight: 600, color: '#1e1e1e',
          }}>
            {slide.location},{' '}
            <em style={{ color: '#f35525', fontStyle: 'normal' }}>{slide.country}</em>
          </div>

          <h2 style={{
            color: '#fff', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 60px)',
            lineHeight: 1.1, textTransform: 'uppercase',
            margin: 0, maxWidth: '700px',
          }}>
            {slide.line1}<br />{slide.line2}
          </h2>
        </div>

        {/* Prev */}
        <button onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
          style={{
            position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)', border: 'none',
            color: '#fff', fontSize: '24px', cursor: 'pointer', zIndex: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.5)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >‹</button>

        {/* Next */}
        <button onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}
          style={{
            position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)', border: 'none',
            color: '#fff', fontSize: '24px', cursor: 'pointer', zIndex: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.5)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
        >›</button>

        {/* Dots */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 2,
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          {slides.map((_, i) => (
            <span key={i} onClick={() => setCurrent(i)} style={{
              display: 'inline-block', cursor: 'pointer',
              width: i === current ? '14px' : '10px',
              height: i === current ? '14px' : '10px',
              borderRadius: '50%',
              backgroundColor: i === current ? '#f35525' : 'rgba(255,255,255,0.7)',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}