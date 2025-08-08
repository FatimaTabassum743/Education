import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking
const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
    });
  }
};

// Track custom events
const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track user engagement
const trackEngagement = (element, action) => {
  trackEvent(action, 'engagement', element, 1);
};

// Analytics Component
const Analytics = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname);
  }, [location]);

  return <>{children}</>;
};

// Hook for tracking custom events
export const useAnalytics = () => {
  const trackBlogView = (postTitle) => {
    trackEvent('blog_view', 'content', postTitle);
  };

  const trackCourseView = (courseTitle) => {
    trackEvent('course_view', 'content', courseTitle);
  };

  const trackSearch = (searchTerm) => {
    trackEvent('search', 'engagement', searchTerm);
  };

  const trackSocialShare = (platform, contentTitle) => {
    trackEvent('social_share', 'engagement', `${platform}_${contentTitle}`);
  };

  const trackContactForm = (formType) => {
    trackEvent('form_submit', 'conversion', formType);
  };

  const trackScrollDepth = (depth) => {
    trackEvent('scroll_depth', 'engagement', depth);
  };

  const trackTimeOnPage = (seconds) => {
    trackEvent('time_on_page', 'engagement', 'seconds', seconds);
  };

  return {
    trackBlogView,
    trackCourseView,
    trackSearch,
    trackSocialShare,
    trackContactForm,
    trackScrollDepth,
    trackTimeOnPage,
  };
};

// Scroll depth tracking
export const useScrollTracking = () => {
  useEffect(() => {
    let scrollDepth = 0;
    let timeOnPage = 0;
    const startTime = Date.now();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      
      if (scrollPercent > scrollDepth) {
        scrollDepth = Math.floor(scrollPercent);
        if (scrollDepth % 25 === 0) { // Track every 25%
          trackEvent('scroll_depth', 'engagement', `${scrollDepth}%`);
        }
      }
    };

    const handleBeforeUnload = () => {
      timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', 'engagement', 'seconds', timeOnPage);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if ('performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            trackEvent('lcp', 'performance', 'largest_contentful_paint', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            trackEvent('fid', 'performance', 'first_input_delay', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            trackEvent('cls', 'performance', 'cumulative_layout_shift', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);
};

export default Analytics; 