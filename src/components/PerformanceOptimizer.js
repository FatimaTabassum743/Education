import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const PerformanceOptimizer = ({ 
  preloadImages = [],
  preloadFonts = [],
  criticalCSS = '',
  deferScripts = []
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded after initial render
    setIsLoaded(true);
  }, []);

  return (
    <Helmet>
      {/* Preload critical resources */}
      {preloadImages.map((image, index) => (
        <link
          key={`preload-image-${index}`}
          rel="preload"
          as="image"
          href={image}
          type="image/webp"
        />
      ))}
      
      {preloadFonts.map((font, index) => (
        <link
          key={`preload-font-${index}`}
          rel="preload"
          as="font"
          href={font}
          type="font/woff2"
          crossOrigin="anonymous"
        />
      ))}

      {/* Critical CSS inline */}
      {criticalCSS && (
        <style type="text/css">
          {criticalCSS}
        </style>
      )}

      {/* Defer non-critical scripts */}
      {deferScripts.map((script, index) => (
        <script
          key={`defer-script-${index}`}
          src={script}
          defer
        />
      ))}

      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* Resource hints for better performance */}
      <link rel="prefetch" href="/courses" />
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/contact" />
    </Helmet>
  );
};

// Lazy loading component for images
export const LazyImage = ({ src, alt, className, placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%"
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for older browsers
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

// Component for optimizing text content
export const OptimizedText = ({ children, className, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = typeof children === 'string' ? children : '';
  
  if (text.length <= maxLength) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={className}>
      {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary-600 hover:text-primary-700 ml-1 underline"
      >
        {isExpanded ? 'Show less' : 'Read more'}
      </button>
    </span>
  );
};

export default PerformanceOptimizer; 