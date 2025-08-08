import React, { useState, useEffect } from 'react';

const PWADebug = () => {
  const [pwaStatus, setPwaStatus] = useState({
    hasManifest: false,
    hasIcons: false,
    hasHttps: false,
    hasServiceWorker: false,
    canInstall: false,
    deferredPrompt: null
  });

  useEffect(() => {
    const checkPWAStatus = () => {
      const status = {
        hasManifest: !!document.querySelector('link[rel="manifest"]'),
        hasIcons: !!document.querySelector('link[rel="icon"]'),
        hasHttps: window.location.protocol === 'https:' || window.location.hostname === 'localhost',
        hasServiceWorker: 'serviceWorker' in navigator,
        canInstall: false,
        deferredPrompt: null
      };

      // Check if we have a deferred prompt
      if (window.deferredPrompt) {
        status.deferredPrompt = window.deferredPrompt;
        status.canInstall = true;
      }

      setPwaStatus(status);
    };

    checkPWAStatus();

    // Listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      setPwaStatus(prev => ({
        ...prev,
        deferredPrompt: e,
        canInstall: true
      }));
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs z-50">
      <h3 className="font-bold mb-2">PWA Debug Info:</h3>
      <div className="space-y-1">
        <div>✅ Manifest: {pwaStatus.hasManifest ? 'Yes' : 'No'}</div>
        <div>✅ Icons: {pwaStatus.hasIcons ? 'Yes' : 'No'}</div>
        <div>✅ HTTPS: {pwaStatus.hasHttps ? 'Yes' : 'No'}</div>
        <div>✅ ServiceWorker: {pwaStatus.hasServiceWorker ? 'Yes' : 'No'}</div>
        <div>✅ Can Install: {pwaStatus.canInstall ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
};

export default PWADebug;
