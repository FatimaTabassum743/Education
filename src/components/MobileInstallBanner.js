import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const MobileInstallBanner = ({ onBannerStateChange }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
      onBannerStateChange?.(true);
    };

    // Listen for app installed
    const handleAppInstalled = () => {
      setShowBanner(false);
      setIsInstalled(true);
      onBannerStateChange?.(false);
      console.log('PWA was installed');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
      setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    onBannerStateChange?.(false);
  };

  // Don't show if already installed
  if (isInstalled || !showBanner) {
    return null;
  }

  return (
    <div className="mobile-banner bg-white/70 backdrop-blur-lg border-b border-gray-200 px-4 py-3 shadow-sm md:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
         
          <div>
            <p className="text-xs text-gray-600">Get the app for a better experience</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
        <button
                  onClick={handleInstallClick}
                  className="bg-gradient-to-r from-purple-500 w-28 to-blue-500 text-white px-2 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-4 h-4 inline mr-1" />
                  Get App
                </button>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileInstallBanner;
