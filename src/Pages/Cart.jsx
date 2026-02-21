import React from 'react';
import { useCart } from '../Components/CartContext';

const SHIPPING = 30;

export default function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalItems, subtotal } = useCart();
  const total = subtotal + (cartItems.length > 0 ? SHIPPING : 0);

  return (
    <div style={{ minHeight: '100vh', background: '#f8f8f6', paddingBottom: '80px' }}>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url(/assets/images/hero-01.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '70px 20px', textAlign: 'center',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '8px', letterSpacing: '2px' }}>HOME / CART</p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>
          Shopping Cart
        </h1>
      </div>

      <style>{`
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 30px;
          align-items: start;
          max-width: 1100px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .cart-item {
          display: grid;
          grid-template-columns: 90px 1fr auto auto;
          align-items: center;
          gap: 16px;
          background: #fff;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          margin-bottom: 14px;
        }
        @media (max-width: 768px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
          .cart-item {
            grid-template-columns: 75px 1fr;
            grid-template-rows: auto auto;
          }
          .cart-item-controls {
            grid-column: 1 / -1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            border-top: 1px solid #f0f0f0;
          }
        }
      `}</style>

      <div className="cart-layout">

        {/* LEFT: Cart Items */}
        <div>
          {cartItems.length === 0 ? (
            <div style={{ background: '#fff', borderRadius: '14px', padding: '60px 20px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <p style={{ fontSize: '56px', margin: '0 0 14px' }}>🛒</p>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', margin: '0 0 8px' }}>Your cart is empty</h2>
              <p style={{ color: '#888', margin: '0 0 20px', fontSize: '14px' }}>Add some products to get started!</p>
              <a href="/products" style={{ display: 'inline-block', padding: '12px 30px', background: '#f35525', color: '#fff', borderRadius: '25px', textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
                Browse Products
              </a>
            </div>
          ) : (
            <div>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  {/* Image */}
                  <div style={{ width: '75px', height: '75px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Info */}
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: '#1a1a1a', lineHeight: 1.3 }}>{item.title}</p>
                    <p style={{ margin: '3px 0 0', fontSize: '11px', color: '#f35525', textTransform: 'capitalize', fontWeight: 600 }}>{item.category}</p>
                    <p style={{ margin: '3px 0 0', fontSize: '13px', color: '#888' }}>${item.price} each</p>
                  </div>

                  {/* Controls */}
                  <div className="cart-item-controls">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button onClick={() => decreaseQty(item.id)} style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#f0c040', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 700, color: '#fff' }}>−</button>
                      <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 700, fontSize: '15px' }}>{item.quantity}</span>
                      <button onClick={() => increaseQty(item.id)} style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#4caf50', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 700, color: '#fff' }}>+</button>
                      <button onClick={() => removeFromCart(item.id)} style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#e53935', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 700, color: '#fff' }}>✕</button>
                    </div>
                    <p style={{ margin: 0, fontSize: '18px', fontWeight: 900, color: '#1a1a1a' }}>${(item.price * item.quantity).toFixed(0)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Summary */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', position: 'sticky', top: '120px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', margin: '0 0 20px', paddingBottom: '14px', borderBottom: '2px solid #f35525' }}>Summary</h2>

          {[
            { label: 'Subtotal', value: `$${subtotal.toFixed(0)}` },
            { label: 'Quantity', value: totalItems },
            { label: 'Shipping', value: cartItems.length > 0 ? `$${SHIPPING}` : '$0' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
              <span style={{ color: '#555' }}>{row.label}</span>
              <span style={{ fontWeight: 700, color: '#1a1a1a' }}>{row.value}</span>
            </div>
          ))}

          <div style={{ borderTop: '1px solid #eee', margin: '14px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontWeight: 800, fontSize: '16px', color: '#1a1a1a' }}>Total</span>
            <span style={{ fontWeight: 900, fontSize: '20px', color: '#f35525' }}>${cartItems.length > 0 ? total.toFixed(0) : 0}</span>
          </div>

          <button disabled={cartItems.length === 0}
            style={{ width: '100%', padding: '14px', background: cartItems.length > 0 ? '#1565c0' : '#ccc', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: cartItems.length > 0 ? 'pointer' : 'not-allowed' }}
            onMouseEnter={e => { if (cartItems.length > 0) e.target.style.background = '#0d47a1'; }}
            onMouseLeave={e => { if (cartItems.length > 0) e.target.style.background = '#1565c0'; }}
          >Checkout</button>

          {cartItems.length > 0 && (
            <a href="/products" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#888', textDecoration: 'underline' }}>← Continue Shopping</a>
          )}
        </div>
      </div>
    </div>
  );
}