import React, { useState } from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon, Mail, MessageCircle } from 'lucide-react';

const SocialShare = ({ 
  title, 
  description, 
  url, 
  image,
  hashtags = ['programming', 'coding', 'education', 'tech']
}) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || window.location.href;
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedHashtags = hashtags.map(tag => `%23${tag}`).join('');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${encodedHashtags}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openShareDialog = (platform) => {
    const shareUrl = shareLinks[platform];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Share2 className="w-5 h-5 mr-2" />
          Share this article
        </h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {/* Twitter */}
        <button
          onClick={() => openShareDialog('twitter')}
          className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          <Twitter className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Twitter</span>
        </button>

        {/* Facebook */}
        <button
          onClick={() => openShareDialog('facebook')}
          className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Facebook className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Facebook</span>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => openShareDialog('linkedin')}
          className="flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">LinkedIn</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => openShareDialog('whatsapp')}
          className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>

        {/* Email */}
        <button
          onClick={() => openShareDialog('email')}
          className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          <Mail className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Email</span>
        </button>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-200 ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>

      {/* Hashtags */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Popular hashtags:</p>
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 cursor-pointer transition-colors duration-200"
              onClick={() => {
                const twitterUrl = `https://twitter.com/search?q=%23${tag}`;
                window.open(twitterUrl, '_blank');
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialShare; 