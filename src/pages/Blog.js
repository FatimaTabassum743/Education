import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import { Calendar, Clock, User, ArrowRight, Search, BookOpen, Code, Lightbulb, TrendingUp, X } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SocialShare from '../components/SocialShare';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Programming Tips for Beginners in 2025",
      excerpt: "Master the fundamentals of programming with these proven strategies that will accelerate your learning journey and help you become a confident developer.",
      content: `
        <h2>10 Essential Programming Tips for Beginners in 2025</h2>
        <p>Starting your programming journey can be overwhelming, but with the right approach, you can build a solid foundation for success. Here are 10 essential tips that will help you navigate the world of coding effectively.</p>
        
        <h3>1. Start with the Fundamentals</h3>
        <p>Before diving into complex frameworks and libraries, ensure you have a strong grasp of programming fundamentals. Focus on understanding variables, data types, control structures, and functions. These concepts are universal across all programming languages.</p>
        
        <h3>2. Practice Daily Coding</h3>
        <p>Consistency is key in programming. Dedicate at least 30 minutes daily to coding practice. Use platforms like LeetCode, HackerRank, or CodeWars to solve problems and improve your problem-solving skills.</p>
        
        <h3>3. Learn Version Control with Git</h3>
        <p>Git is essential for modern development. Learn basic commands like commit, push, pull, and branch management. This skill will be invaluable when collaborating with other developers.</p>
        
        <h3>4. Build Real Projects</h3>
        <p>Apply your knowledge by building real-world projects. Start with simple applications and gradually increase complexity. This hands-on experience will reinforce your learning and build your portfolio.</p>
        
        <h3>5. Join Coding Communities</h3>
        <p>Connect with fellow developers through online communities, forums, and social media groups. Platforms like Stack Overflow, Reddit, and Discord offer valuable learning opportunities and networking.</p>
        
        <h3>6. Read Other People's Code</h3>
        <p>Study open-source projects and code written by experienced developers. This will expose you to different coding styles, best practices, and problem-solving approaches.</p>
        
        <h3>7. Learn to Debug Effectively</h3>
        <p>Debugging is a crucial skill. Learn to use debugging tools, read error messages carefully, and develop a systematic approach to troubleshooting code issues.</p>
        
        <h3>8. Stay Updated with Technology Trends</h3>
        <p>The tech industry evolves rapidly. Follow tech blogs, podcasts, and YouTube channels to stay informed about new technologies, frameworks, and industry best practices.</p>
        
        <h3>9. Focus on Problem-Solving</h3>
        <p>Programming is fundamentally about solving problems. Practice breaking down complex problems into smaller, manageable parts. This analytical thinking will serve you well in any programming language.</p>
        
        <h3>10. Don't Fear Failure</h3>
        <p>Every programmer faces challenges and makes mistakes. View errors as learning opportunities rather than setbacks. The debugging process often teaches you more than writing perfect code on the first try.</p>
        
        <p>Remember, becoming a proficient programmer is a journey that requires patience, persistence, and continuous learning. Start with these fundamentals, and you'll be well on your way to programming success!</p>
      `,
      author: "KodeZ Academy Team",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "programming",
      tags: ["programming", "beginners", "coding tips", "learning"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 2,
      title: "The Future of Online Education: AI-Powered Learning Platforms",
      excerpt: "Discover how artificial intelligence is revolutionizing online education and creating personalized learning experiences for students worldwide.",
      content: `
        <h2>The Future of Online Education: AI-Powered Learning Platforms</h2>
        <p>As we move further into the digital age, artificial intelligence is transforming how we approach education. AI-powered learning platforms are creating more personalized, efficient, and engaging educational experiences for students of all ages.</p>
        
        <h3>Personalized Learning Paths</h3>
        <p>AI algorithms analyze student performance data to create customized learning paths. These systems adapt to individual learning styles, pace, and preferences, ensuring that each student receives instruction tailored to their specific needs.</p>
        
        <h3>Intelligent Tutoring Systems</h3>
        <p>AI tutors provide instant feedback, answer questions, and offer explanations in real-time. These systems can identify knowledge gaps and provide targeted remediation, making learning more efficient and effective.</p>
        
        <h3>Automated Assessment and Feedback</h3>
        <p>AI-powered assessment tools can evaluate student work, provide detailed feedback, and track progress over time. This automation allows educators to focus more on individual student needs and less on administrative tasks.</p>
        
        <h3>Predictive Analytics</h3>
        <p>By analyzing patterns in student behavior and performance, AI can predict which students might struggle with certain concepts and provide early intervention strategies.</p>
        
        <h3>Virtual Reality and Augmented Reality</h3>
        <p>AI combined with VR/AR technologies creates immersive learning experiences that make complex concepts more accessible and engaging.</p>
        
        <h3>Natural Language Processing</h3>
        <p>AI-powered chatbots and virtual assistants can answer student questions, provide guidance, and offer support 24/7, making education more accessible than ever before.</p>
        
        <p>The integration of AI in education represents a paradigm shift that promises to make learning more personalized, efficient, and accessible for students worldwide.</p>
      `,
      author: "KodeZ Academy Team",
            date: "2025-01-10",
      readTime: "6 min read",
      category: "education",
      tags: ["AI", "online education", "technology", "learning platforms"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Mastering React.js: A Comprehensive Guide for 2025",
      excerpt: "Learn the latest React.js features, best practices, and advanced techniques to build modern, scalable web applications.",
      content: `
        <h2>Mastering React.js: A Comprehensive Guide for 2025</h2>
        <p>React.js continues to dominate the frontend development landscape in 2025. This comprehensive guide will help you master the latest features and best practices for building modern web applications.</p>
        
        <h3>Understanding React Hooks</h3>
        <p>Hooks have revolutionized React development by allowing functional components to manage state and side effects. Master useState, useEffect, useContext, and custom hooks to write cleaner, more maintainable code.</p>
        
        <h3>Performance Optimization</h3>
        <p>Learn essential optimization techniques including React.memo, useMemo, useCallback, and code splitting. These tools help create faster, more efficient applications.</p>
        
        <h3>State Management Solutions</h3>
        <p>Explore modern state management options like Zustand, Redux Toolkit, and React Query. Choose the right solution based on your application's complexity and requirements.</p>
        
        <h3>TypeScript Integration</h3>
        <p>TypeScript provides type safety and better developer experience. Learn how to integrate TypeScript with React for more robust applications.</p>
        
        <h3>Testing Strategies</h3>
        <p>Implement comprehensive testing using Jest, React Testing Library, and Cypress. Ensure your components are reliable and maintainable.</p>
        
        <h3>Modern Build Tools</h3>
        <p>Stay updated with Vite, Webpack 5, and other modern build tools that offer faster development and build times.</p>
        
        <p>By mastering these concepts, you'll be well-equipped to build scalable, maintainable React applications that meet modern web standards.</p>
      `,
      author: "KodeZ Academy Team",      date: "2025-01-08",
      readTime: "10 min read",
      category: "programming",
      tags: ["React.js", "JavaScript", "frontend", "web development"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Effective Study Techniques for Online Learning Success",
      excerpt: "Discover proven study strategies that will help you maximize your online learning experience and achieve better academic results.",
      content: `
        <h2>Effective Study Techniques for Online Learning Success</h2>
        <p>Online learning requires different strategies than traditional classroom education. These proven techniques will help you stay focused, retain information better, and achieve your learning goals.</p>
        
        <h3>The Pomodoro Technique</h3>
        <p>Work in focused 25-minute intervals followed by 5-minute breaks. This technique helps maintain concentration and prevents mental fatigue during long study sessions.</p>
        
        <h3>Active Learning Strategies</h3>
        <p>Instead of passively watching videos, engage actively by taking notes, asking questions, and applying concepts through practice exercises and projects.</p>
        
        <h3>Spaced Repetition</h3>
        <p>Review material at increasing intervals to strengthen memory retention. Use apps like Anki or create your own spaced repetition schedule.</p>
        
        <h3>Mind Mapping</h3>
        <p>Create visual representations of concepts to better understand relationships between ideas and improve memory retention.</p>
        
        <h3>Peer Learning</h3>
        <p>Join study groups, participate in online forums, and teach concepts to others. Explaining ideas to others reinforces your own understanding.</p>
        
        <h3>Digital Organization</h3>
        <p>Use digital tools to organize your study materials, create searchable notes, and maintain a structured learning environment.</p>
        
        <h3>Regular Self-Assessment</h3>
        <p>Regularly test your knowledge through quizzes, practice problems, and self-reflection to identify areas that need more attention.</p>
        
        <p>By implementing these techniques consistently, you'll develop effective study habits that will serve you well throughout your educational journey.</p>
      `,
      author: "KodeZ Academy Team",      date: "2025-01-05",
      readTime: "7 min read",
      category: "education",
      tags: ["study techniques", "online learning", "productivity", "academic success"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Building a Career in Tech: Essential Skills for 2025",
      excerpt: "Navigate the competitive tech industry with these essential skills and strategies that will help you build a successful career in technology.",
      content: `
        <h2>Building a Career in Tech: Essential Skills for 2025</h2>
        <p>The technology industry is constantly evolving, and staying competitive requires a combination of technical skills, soft skills, and strategic career planning. Here's your roadmap to success in the tech industry.</p>
        
        <h3>Technical Skills</h3>
        <p>Master fundamental programming languages like Python, JavaScript, and Java. Learn cloud computing platforms (AWS, Azure, GCP) and understand DevOps practices. Stay updated with emerging technologies like AI/ML, blockchain, and IoT.</p>
        
        <h3>Problem-Solving and Critical Thinking</h3>
        <p>Develop strong analytical skills to break down complex problems and create efficient solutions. Practice coding challenges and participate in hackathons to sharpen your problem-solving abilities.</p>
        
        <h3>Communication and Collaboration</h3>
        <p>Effective communication is crucial in tech teams. Learn to explain technical concepts to non-technical stakeholders and collaborate effectively with cross-functional teams.</p>
        
        <h3>Continuous Learning</h3>
        <p>The tech industry moves fast. Develop a habit of continuous learning through online courses, conferences, workshops, and staying updated with industry trends.</p>
        
        <h3>Networking and Community</h3>
        <p>Build your professional network through meetups, conferences, online communities, and social media. Networking can open doors to opportunities and provide valuable mentorship.</p>
        
        <h3>Portfolio Development</h3>
        <p>Create a strong portfolio showcasing your projects, contributions to open source, and technical achievements. A well-maintained portfolio can significantly impact your career prospects.</p>
        
        <h3>Soft Skills</h3>
        <p>Develop leadership, time management, and adaptability skills. These soft skills often differentiate successful tech professionals from their peers.</p>
        
        <p>Success in tech requires a balanced approach to skill development, continuous learning, and strategic career planning. Focus on building both technical expertise and professional relationships.</p>
      `,
      author: "KodeZ Academy Team",      date: "2025-01-03",
      readTime: "9 min read",
      category: "career",
      tags: ["career development", "tech industry", "professional skills", "networking"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'education', name: 'Education', icon: Lightbulb },
    { id: 'career', name: 'Career', icon: TrendingUp }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <PageTitle title="Tech Talks" />
      <EnhancedSEO 
        title="Blog & Learning Tips"
        description="Expert insights, tutorials, and strategies to accelerate your learning journey. Discover programming tips, educational resources, and career guidance."
        keywords={['programming tips', 'online education', 'learning strategies', 'coding tutorials', 'career development']}
        type="website"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <Breadcrumbs />
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Blog & Learning Tips
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Expert insights, tutorials, and strategies to accelerate your learning journey
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-primary-600 font-medium">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
          </div>
        )}
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h1>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Social Share Component */}
              <div className="mt-8">
                <SocialShare 
                  title={selectedPost.title}
                  description={selectedPost.excerpt}
                  hashtags={selectedPost.tags}
                />
              </div>
              
              {/* Related Posts */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blogPosts
                    .filter(post => post.id !== selectedPost.id && post.category === selectedPost.category)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <article
                        key={relatedPost.id}
                        className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setSelectedPost(relatedPost)}
                      >
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(relatedPost.date).toLocaleDateString()}
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Blog; 