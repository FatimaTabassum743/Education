import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title, 
  description, 
  keywords = [], 
  author, 
  image, 
  url, 
  type = 'article',
  publishedTime,
  modifiedTime 
}) => {
  const fullTitle = title ? `${title} - KodeZ Academy` : 'KodeZ Academy - Live Classes • Global Community';
  const fullDescription = description || 'Expert insights, tutorials, and strategies to accelerate your learning journey. Join our global community of learners and developers.';
  const fullKeywords = ['education', 'programming', 'online learning', 'coding', 'web development', 'React.js', 'JavaScript', 'Python', 'career development', ...keywords].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author || 'KodeZ Academy Team'} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || window.location.href} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="KodeZ Academy" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      
      {/* Structured Data for Blog Post */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": fullDescription,
            "image": image,
            "author": {
              "@type": "Person",
              "name": author || "KodeZ Academy Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "KodeZ Academy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kodezacademy.com/logo.png"
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url || window.location.href
            }
          })}
        </script>
      )}
      
      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "KodeZ Academy",
          "description": "Live Classes • Global Community - Expert programming education and online learning platform",
          "url": "https://kodezacademy.com",
          "logo": "https://kodezacademy.com/logo.png",
          "sameAs": [
            "https://facebook.com/kodezacademy",
            "https://twitter.com/kodezacademy",
            "https://linkedin.com/company/kodezacademy"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "availableLanguage": "English"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead; 