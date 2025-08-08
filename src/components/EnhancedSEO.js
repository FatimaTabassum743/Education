import React from 'react';
import { Helmet } from 'react-helmet';

const EnhancedSEO = ({ 
  title, 
  description, 
  keywords = [], 
  author, 
  image, 
  url, 
  type = 'article',
  publishedTime,
  modifiedTime,
  breadcrumbs = [],
  relatedPosts = [],
  courseData = null,
  organizationData = null
}) => {
  const fullTitle = title ? `${title} - KodeZ Academy` : 'KodeZ Academy - Live Classes • Global Community';
  const fullDescription = description || 'Expert insights, tutorials, and strategies to accelerate your learning journey. Join our global community of learners and developers.';
  const fullKeywords = [
    'education', 'programming', 'online learning', 'coding', 'web development', 
    'React.js', 'JavaScript', 'Python', 'career development', 'tech education',
    'coding bootcamp', 'software development', 'programming courses', 'learn to code',
    ...keywords
  ].join(', ');

  const baseUrl = 'https://kodezacademy.com';
  const fullUrl = url ? `${baseUrl}${url}` : window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author || 'KodeZ Academy Team'} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="KodeZ Academy" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:site" content="@kodezacademy" />
      <meta name="twitter:creator" content="@kodezacademy" />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": `${baseUrl}${crumb.url}`
            }))
          })}
        </script>
      )}
      
      {/* Article Structured Data */}
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
                "url": `${baseUrl}/logo.png`
              }
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullUrl
            },
            "articleSection": "Programming Education",
            "keywords": fullKeywords,
            "wordCount": description ? description.split(' ').length : 0
          })}
        </script>
      )}
      
      {/* Course Structured Data */}
      {courseData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": courseData.title,
            "description": courseData.description,
            "provider": {
              "@type": "Organization",
              "name": "KodeZ Academy",
              "sameAs": [
                "https://facebook.com/kodezacademy",
                "https://twitter.com/kodezacademy",
                "https://linkedin.com/company/kodezacademy"
              ]
            },
            "courseMode": "online",
            "educationalLevel": courseData.level || "beginner",
            "coursePrerequisites": courseData.prerequisites || "No prerequisites required",
            "educationalCredentialAwarded": courseData.certificate ? "Certificate of Completion" : null,
            "timeRequired": courseData.duration,
            "teaches": courseData.skills || []
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
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "image": `${baseUrl}/og-image.png`,
          "sameAs": [
            "https://facebook.com/kodezacademy",
            "https://twitter.com/kodezacademy",
            "https://linkedin.com/company/kodezacademy",
            "https://youtube.com/kodezacademy"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "foundingDate": "2024",
          "numberOfEmployees": "10-50",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "40.7128",
              "longitude": "-74.0060"
            },
            "geoRadius": "50000"
          }
        })}
      </script>
      
      {/* Website Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "KodeZ Academy",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Online Live Classes for Young Learners - Web Development, AI/ML, Digital Marketing",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* FAQ Structured Data */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What programming languages do you teach?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We teach JavaScript, Python, React.js, Node.js, and other modern programming languages and frameworks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer certificates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide certificates of completion for all our courses and programs."
                }
              },
              {
                "@type": "Question",
                "name": "Are the courses suitable for beginners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We offer courses for all skill levels, from complete beginners to advanced developers."
                }
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO; 