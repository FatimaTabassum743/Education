import { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} - KodeZ Academy` : 'KodeZ Academy';
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return null;
};

export default PageTitle; 