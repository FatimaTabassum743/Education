import React, { useState, useEffect } from 'react';
import { Download, Bell, MessageSquare } from 'lucide-react';

const PWAInstaller = () => {
  const [notificationPermission, setNotificationPermission] = useState('default');
  const [pwaSupported, setPwaSupported] = useState(false);

  useEffect(() => {
    // Check PWA support for InfinityFree
    const checkPWASupport = () => {
      const support = {
        serviceWorker: 'serviceWorker' in navigator,
        pushManager: 'PushManager' in window,
        notifications: 'Notification' in window,
        manifest: 'manifest' in document
      };
      
      setPwaSupported(support.serviceWorker && support.manifest);
      console.log('PWA Support:', support);
    };

    checkPWASupport();

    // Check notification permission
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        setNotificationPermission(permission);
        
        if (permission === 'granted' && pwaSupported) {
          // Register for push notifications
          if ('serviceWorker' in navigator && 'PushManager' in window) {
            try {
              const registration = await navigator.serviceWorker.ready;
              const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY' // You'll need to generate this
              });
              console.log('Push notification subscription:', subscription);
            } catch (error) {
              console.error('Error subscribing to push notifications:', error);
            }
          }
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
      }
    }
  };

  const sendTestNotification = () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('KodeZ Academy', {
          body: 'Welcome to KodeZ Academy! Start learning today.',
          icon: '/favicon-32x32.png',
          badge: '/favicon-32x32.png',
          vibrate: [100, 50, 100]
        });
      }).catch((error) => {
        console.error('Error showing notification:', error);
      });
    }
  };

  // Don't show if PWA is not supported
  if (!pwaSupported) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3">
      {notificationPermission === 'default' && (
        <button
          onClick={requestNotificationPermission}
          className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
          }}
        >
          <Bell className="w-5 h-5 mr-2" />
          ENABLE NOTIFICATIONS
        </button>
      )}
      
      {notificationPermission === 'granted' && (
        <button
          onClick={sendTestNotification}
          className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
          }}
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          TEST NOTIFICATION
        </button>
      )}
    </div>
  );
};

export default PWAInstaller; 