import React, { useState, useEffect } from 'react';
import { useCart } from '../Components/CartContext';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80';
const formatPrice = (price) => new Intl.NumberFormat('en-EG').format(price);

// ========== VILLA CARD ==========
function VillaCard({ villa, onSelect }) {
  const { addToCart, cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();
  const [added, setAdded] = useState(false);
  const cartItem = cartItems.find(item => item.id === villa.id);
  const isInCart = !!cartItem;

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart({ id: villa.id, title: villa.title, price: villa.price, thumbnail: villa.thumbnail, category: villa.category });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', transition: 'transform 0.3s, box-shadow 0.3s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.14)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)'; }}
    >
      <div style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#eee' }}>
        <img src={villa.thumbnail} alt={villa.title}
          onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, color: '#f35525' }}>{villa.category}</div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: villa.status === 'For Sale' ? '#2e7d32' : '#1565c0', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, color: '#fff' }}>{villa.status}</div>
        {villa.pool && <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.7)', borderRadius: '20px', padding: '4px 10px', fontSize: '11px', color: '#fff' }}>🏊 Pool</div>}
      </div>

      <div style={{ padding: '18px' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>{villa.title}</h3>
        <p style={{ margin: '0 0 10px', color: '#888', fontSize: '13px' }}>📍 {villa.location}</p>
        <p style={{ margin: '0 0 12px', fontSize: '20px', fontWeight: 900, color: '#f35525' }}>
          {formatPrice(villa.price)} <span style={{ fontSize: '13px', fontWeight: 600, color: '#888' }}>{villa.currency}</span>
        </p>
        <div style={{ display: 'flex', gap: '10px', fontSize: '12px', color: '#666', borderTop: '1px solid #f0f0f0', paddingTop: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span>🛏️ {villa.bedrooms} Beds</span>
          <span>🚿 {villa.bathrooms} Baths</span>
          <span>📐 {villa.area}m²</span>
          <span>⭐ {villa.rating}</span>
        </div>

        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => onSelect(villa), 300); }}
          style={{ width: '100%', padding: '11px', background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: '25px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', marginBottom: '8px', transition: 'background 0.3s' }}
          onMouseEnter={e => e.target.style.background = '#f35525'}
          onMouseLeave={e => e.target.style.background = '#1a1a2e'}
        >View Villa Details</button>

        {isInCart ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f0fff0', border: '1px solid #c8e6c9', borderRadius: '25px', padding: '6px 12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#2e7d32' }}>✅ In Cart</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button onClick={() => decreaseQty(villa.id)} style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#f0c040', border: 'none', cursor: 'pointer', fontSize: '15px', color: '#fff', fontWeight: 700 }}>−</button>
              <span style={{ fontWeight: 700, fontSize: '14px', minWidth: '18px', textAlign: 'center' }}>{cartItem.quantity}</span>
              <button onClick={() => increaseQty(villa.id)} style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#4caf50', border: 'none', cursor: 'pointer', fontSize: '15px', color: '#fff', fontWeight: 700 }}>+</button>
              <button onClick={() => removeFromCart(villa.id)} style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#e53935', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#fff', fontWeight: 700 }}>✕</button>
            </div>
          </div>
        ) : (
          <button onClick={handleAdd}
            style={{ width: '100%', padding: '11px', background: added ? '#4caf50' : '#f35525', color: '#fff', border: 'none', borderRadius: '25px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.3s' }}>
            {added ? '✅ Added!' : '🛒 Add to Cart'}
          </button>
        )}
      </div>
    </div>
  );
}

// ========== DETAILS VIEW ==========
function VillaDetails({ villa, onBack }) {
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart, cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();
  const cartItem = cartItems.find(item => item.id === villa.id);
  const isInCart = !!cartItem;

  const handleAdd = () => {
    addToCart({ id: villa.id, title: villa.title, price: villa.price, thumbnail: villa.thumbnail, category: villa.category });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f8f6', paddingBottom: '80px' }}>
      <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${villa.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '90px 20px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', marginBottom: '8px', letterSpacing: '2px' }}>HOME / PRODUCTS / {villa.title.toUpperCase()}</p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, margin: '0 0 12px' }}>{villa.title}</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', margin: 0 }}>📍 {villa.location}</p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 20px' }}>
        <button onClick={onBack} style={{ background: 'none', border: '2px solid #1a1a2e', borderRadius: '25px', padding: '8px 22px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: '#1a1a2e', marginBottom: '30px' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1a1a2e'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#1a1a2e'; }}
        >← Back to Products</button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <div style={{ borderRadius: '14px', overflow: 'hidden', marginBottom: '12px', height: '360px', boxShadow: '0 8px 24px rgba(0,0,0,0.14)', background: '#eee' }}>
              <img src={villa.images[activeImg]} alt={villa.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }} />
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {villa.images.map((img, i) => (
                <img key={i} src={img} alt="" onClick={() => setActiveImg(i)}
                  onError={e => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }}
                  style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer', border: i === activeImg ? '3px solid #f35525' : '3px solid transparent', opacity: i === activeImg ? 1 : 0.75 }} />
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
              <span style={{ background: '#fff0ec', color: '#f35525', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>{villa.category}</span>
              <span style={{ background: villa.status === 'For Sale' ? '#e8f5e9' : '#e3f2fd', color: villa.status === 'For Sale' ? '#2e7d32' : '#1565c0', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>{villa.status}</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#1a1a1a', margin: '0 0 6px' }}>{villa.title}</h2>
            <p style={{ color: '#888', fontSize: '14px', margin: '0 0 16px' }}>📍 {villa.location}</p>

            <div style={{ background: 'linear-gradient(135deg,#1a1a2e,#2d2d4e)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px' }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '12px', letterSpacing: '1px' }}>PRICE</p>
              <p style={{ margin: '4px 0 0', color: '#f35525', fontSize: '28px', fontWeight: 900 }}>{formatPrice(villa.price)} {villa.currency}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '20px' }}>
              {[{ icon: '🛏️', label: 'Beds', value: villa.bedrooms }, { icon: '🚿', label: 'Baths', value: villa.bathrooms }, { icon: '📐', label: 'Area', value: `${villa.area}m²` }, { icon: '🚗', label: 'Garage', value: villa.garage }].map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '12px 8px', textAlign: 'center', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                  <p style={{ margin: 0, fontSize: '20px' }}>{s.icon}</p>
                  <p style={{ margin: '4px 0 0', fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{s.value}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#999', textTransform: 'uppercase' }}>{s.label}</p>
                </div>
              ))}
            </div>

            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '14px', marginBottom: '20px' }}>{villa.description}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '20px' }}>
              {[{ label: 'Compound', value: villa.compound, icon: '🏘️' }, { label: 'Delivery', value: villa.deliveryDate, icon: '📅' }, { label: 'Pool', value: villa.pool ? 'Yes ✅' : 'No ❌', icon: '🏊' }, { label: 'Garden', value: villa.garden ? 'Yes ✅' : 'No ❌', icon: '🌳' }, { label: 'Rating', value: `${villa.rating} / 5`, icon: '⭐' }].map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '10px 14px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
                  <p style={{ margin: 0, fontSize: '11px', color: '#999', textTransform: 'uppercase' }}>{item.label}</p>
                  <p style={{ margin: '3px 0 0', fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>{item.icon} {item.value}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              <button style={{ flex: 1, padding: '13px', background: '#f35525', color: '#fff', border: 'none', borderRadius: '25px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.background = '#d44418'} onMouseLeave={e => e.target.style.background = '#f35525'}>📅 Schedule a Visit</button>
              <button style={{ flex: 1, padding: '13px', background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: '25px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.background = '#2d2d4e'} onMouseLeave={e => e.target.style.background = '#1a1a2e'}>📞 Contact Agent</button>
            </div>

            {isInCart ? (
              <div style={{ background: '#f0fff0', border: '2px solid #4caf50', borderRadius: '14px', padding: '14px 18px' }}>
                <p style={{ margin: '0 0 10px', fontSize: '13px', fontWeight: 700, color: '#2e7d32', textAlign: 'center' }}>✅ Added to Cart</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', color: '#555', fontWeight: 600 }}>Quantity:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={() => decreaseQty(villa.id)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f0c040', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#fff', fontWeight: 700 }}>−</button>
                    <span style={{ fontWeight: 700, fontSize: '16px', minWidth: '22px', textAlign: 'center' }}>{cartItem.quantity}</span>
                    <button onClick={() => increaseQty(villa.id)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#4caf50', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#fff', fontWeight: 700 }}>+</button>
                    <button onClick={() => removeFromCart(villa.id)} style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#e53935', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#fff', fontWeight: 700 }}>✕</button>
                  </div>
                </div>
              </div>
            ) : (
              <button onClick={handleAdd} style={{ width: '100%', padding: '14px', background: added ? '#4caf50' : '#f35525', color: '#fff', border: 'none', borderRadius: '25px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', transition: 'background 0.3s' }}>
                {added ? '✅ Added to Cart!' : '🛒 Add to Cart'}
              </button>
            )}
          </div>
        </div>

        <div style={{ marginTop: '50px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a1a', marginBottom: '20px' }}>Villa Features</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {villa.features.map((f, i) => (
              <span key={i} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '25px', padding: '8px 20px', fontSize: '13px', fontWeight: 600, color: '#333' }}>✅ {f}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '40px', background: '#fff', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a', margin: '0 0 16px' }}>🧑‍💼 Property Agent</h3>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#f35525', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#fff', fontWeight: 700, flexShrink: 0 }}>{villa.agent.name.charAt(0)}</div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '16px', color: '#1a1a1a' }}>{villa.agent.name}</p>
              <p style={{ margin: '4px 0 0', color: '#888', fontSize: '13px' }}>📞 {villa.agent.phone}</p>
              <p style={{ margin: '2px 0 0', color: '#888', fontSize: '13px' }}>✉️ {villa.agent.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== LIST VIEW ==========
function ProductsList({ onSelect }) {
  // ✅ Fetch من الـ API (JSON file)
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    setLoading(true);
fetch(`${process.env.PUBLIC_URL}/data/villas.json`).then(res => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })
      .then(data => { setVillas(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  const categories = ['All', ...new Set(villas.map(v => v.category))];

  const filtered = villas.filter(v => {
    const q = search.toLowerCase().trim();
    const matchSearch = v.title.toLowerCase().includes(q) || v.location.toLowerCase().includes(q) || v.compound.toLowerCase().includes(q) || String(v.id).includes(q);
    return matchSearch && (filter === 'All' || v.category === filter) && (statusFilter === 'All' || v.status === statusFilter);
  });

  return (
    <div style={{ minHeight: '100vh', background: '#f8f8f6', paddingBottom: '60px' }}>
      <div style={{
background: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(${process.env.PUBLIC_URL}/assets/images/hero-01.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '90px 20px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '8px', letterSpacing: '2px' }}>HOME / PRODUCTS</p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>Our Products</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '12px', fontSize: '15px' }}>اكتشف مجموعتنا من الفيلل الفاخرة</p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

        {/* ✅ Loading State */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>⏳</div>
            <p style={{ color: '#888', fontSize: '16px' }}>Loading villas...</p>
          </div>
        )}

        {/* ✅ Error State */}
        {error && (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff3f3', borderRadius: '20px', margin: '40px auto', maxWidth: '400px' }}>
            <div style={{ fontSize: '40px', marginBottom: '14px' }}>❌</div>
            <h3 style={{ color: '#c62828', margin: '0 0 8px' }}>Failed to load data</h3>
            <p style={{ color: '#999', fontSize: '14px', margin: '0 0 16px' }}>{error}</p>
            <button onClick={() => window.location.reload()} style={{ padding: '10px 24px', background: '#f35525', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 700 }}>Retry</button>
          </div>
        )}

        {/* ✅ Content */}
        {!loading && !error && (
          <>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', margin: '40px 0 14px' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} style={{ padding: '8px 22px', borderRadius: '25px', border: 'none', fontSize: '13px', fontWeight: 600, cursor: 'pointer', background: filter === cat ? '#f35525' : '#fff', color: filter === cat ? '#fff' : '#555', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { if (filter !== cat) e.currentTarget.style.background = '#f0f0f0'; }}
                  onMouseLeave={e => { if (filter !== cat) e.currentTarget.style.background = '#fff'; }}
                >{cat}</button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '24px' }}>
              {['All', 'For Sale', 'For Rent'].map(s => (
                <button key={s} onClick={() => setStatusFilter(s)} style={{ padding: '6px 18px', borderRadius: '25px', border: `2px solid ${statusFilter === s ? '#1a1a2e' : '#ddd'}`, fontSize: '13px', fontWeight: 600, cursor: 'pointer', background: statusFilter === s ? '#1a1a2e' : 'transparent', color: statusFilter === s ? '#fff' : '#666', transition: 'all 0.3s' }}>{s}</button>
              ))}
            </div>

            <div style={{ maxWidth: '480px', margin: '0 auto 20px', position: 'relative' }}>
              <input type="text" placeholder="Search by name, location, compound..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '13px 45px 13px 18px', borderRadius: '25px', border: '1px solid #e0e0e0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }} />
              <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>🔍</span>
            </div>

            <p style={{ textAlign: 'center', color: '#888', fontSize: '13px', marginBottom: '24px' }}>
              Showing <strong style={{ color: '#1a1a2e' }}>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
            </p>

            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ fontSize: '60px', marginBottom: '14px' }}>🔍</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', margin: '0 0 8px' }}>No Results Found</h3>
                <p style={{ color: '#999', fontSize: '14px', margin: '0 0 20px' }}>Try different keywords or clear the filters</p>
                <button onClick={() => { setSearch(''); setFilter('All'); setStatusFilter('All'); }}
                  style={{ padding: '11px 28px', background: '#f35525', color: '#fff', border: 'none', borderRadius: '25px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
                  Clear All
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: '24px' }}>
                {filtered.map(villa => <VillaCard key={villa.id} villa={villa} onSelect={onSelect} />)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Products() {
  const [selected, setSelected] = useState(null);
  return selected ? (
    <VillaDetails villa={selected} onBack={() => { setSelected(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
  ) : (
    <ProductsList onSelect={setSelected} />
  );
}