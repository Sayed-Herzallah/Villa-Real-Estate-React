import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setFadeOut(false);

    const fadeTimer = setTimeout(() => setFadeOut(true), 2200);
    const hideTimer = setTimeout(() => setLoading(false), 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <>
      <style>{`
        @keyframes loaderBounce {
          0%, 80%, 100% { transform: translateY(0) scale(1);       opacity: 0.4; }
          40%            { transform: translateY(-22px) scale(1.15); opacity: 1;   }
        }
        @keyframes loaderBarFill {
          0%   { width: 0%;   }
          100% { width: 100%; }
        }
        @keyframes loaderPulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1;   }
        }
        .loader-overlay {
          position: fixed; inset: 0; z-index: 99999;
          background: #0a0a0a;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 36px;
          opacity: 1; visibility: visible;
          transition: opacity 0.6s ease, visibility 0.6s ease;
        }
        .loader-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
        }
        .loader-logo {
          font-size: 32px; font-weight: 900;
          color: #fff; letter-spacing: 8px; text-transform: uppercase;
          animation: loaderPulse 1.5s ease infinite;
        }
        .loader-logo span { color: #f35525; }
        .loader-dots { display: flex; gap: 16px; align-items: center; }
        .loader-dot {
          width: 16px; height: 16px; border-radius: 50%;
          background: #f35525;
          box-shadow: 0 0 14px rgba(243,85,37,0.7);
          animation: loaderBounce 1.2s infinite ease-in-out;
        }
        .loader-dot:nth-child(1) { animation-delay: 0s;   }
        .loader-dot:nth-child(2) { animation-delay: 0.2s; }
        .loader-dot:nth-child(3) { animation-delay: 0.4s; }
        .loader-bar-wrap {
          width: 180px; height: 3px;
          background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden;
        }
        .loader-bar {
          height: 100%; border-radius: 99px;
          background: linear-gradient(90deg, #f35525, #ff8c69);
          animation: loaderBarFill 2.2s ease forwards;
        }
      `}</style>

      <div className={`loader-overlay${fadeOut ? ' fade-out' : ''}`}>
        <div className="loader-logo">Vil<span>la</span></div>
        <div className="loader-dots">
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
      </div>
    </>
  );
}