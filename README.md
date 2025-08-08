# 🎓 KodeZ Academy - Online Live Classes for Young Learners

A modern, responsive ReactJS website for **KodeZ Academy**, an EdTech platform specializing in interactive live classes for students aged 12-21 from around the world. Empowering learners with (Knowledge, Education, Skills, Upliftment & Growth).

## 🌟 Features

### **Live Learning Experience**
- **Interactive Live Classes** - Real-time learning with expert instructors
- **Small Group Learning** - Maximum 8 students per class for personalized attention
- **Global Community** - Students from 25+ countries
- **Age-Appropriate Content** - Designed specifically for 12-21 age group

### **Course Offerings**
- **Web Development** - Full Stack Development (₹2,999)
- **AI & Machine Learning** - Future Technology (₹4,999)
- **Digital Marketing** - Social Media & SEO (₹3,499)
- **Python Programming** - Coding for Beginners (₹2,499)
- **AWS Cloud Computing** - Cloud Infrastructure (₹5,999)

### **Technical Features**
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Beautiful animations and smooth interactions
- **SEO Optimized** - Search engine friendly with meta tags
- **Contact Forms** - EmailJS integration for lead generation
- **WhatsApp Integration** - Direct communication with students
- **Admin Dashboard** - Manage student inquiries and data
- **Data Storage** - Multiple options (Google Sheets, Airtable, Local Storage)

## 🎨 Design & Branding

### **Color Palette**
- **Primary**: Purple (#8b5cf6) - Modern, creative, tech-savvy
- **Secondary**: Blue (#3b82f6) - Trust, reliability, education
- **Accent**: Green (#10b981) - Growth, success, learning

### **Typography**
- **Headings**: Poppins (Modern, friendly, readable)
- **Body**: Inter (Clean, professional, accessible)

### **Target Audience**
- **Age Group**: 12-21 years old
- **Geographic Focus**: Global (25+ countries)
- **Learning Style**: Interactive, hands-on, collaborative

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kodezacademy.git
cd kodezacademy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
kodezacademy/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # Site icon
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.js       # Navigation header
│   │   ├── Footer.js       # Site footer
│   │   ├── ContactForm.js  # Contact form component
│   │   └── WhatsAppButton.js # WhatsApp integration
│   ├── pages/              # Page components
│   │   ├── Home.js         # Landing page
│   │   ├── Courses.js      # Course listings
│   │   ├── About.js        # About us page
│   │   ├── Contact.js      # Contact page
│   │   └── Admin.js        # Admin dashboard
│   ├── services/           # API and data services
│   │   ├── emailjsService.js
│   │   ├── sheetsService.js
│   │   ├── airtableService.js
│   │   └── localStorageService.js
│   ├── App.js              # Main app component
│   ├── index.js            # App entry point
│   └── index.css           # Global styles
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## 🛠️ Technologies Used

### **Frontend**
- **React.js** - Modern JavaScript library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Icons** - Additional icon library

### **Backend Services**
- **EmailJS** - Email sending without backend
- **Google Sheets API** - Data storage option
- **Airtable API** - Alternative data storage
- **Local Storage** - Client-side data storage

### **Deployment**
- **Netlify** - Static site hosting
- **Vercel** - Alternative hosting platform

## 📧 Contact Form Setup

### **EmailJS Configuration**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `src/services/emailjsService.js` with your credentials

### **Data Storage Options**

#### **Option 1: Google Sheets (Recommended)**
- Free and reliable
- Easy to manage data
- Export to Excel/CSV
- Setup guide in `GOOGLE_SHEETS_SETUP.md`

#### **Option 2: Airtable**
- User-friendly interface
- Advanced filtering and views
- API integration
- Setup guide in `AIRTABLE_SETUP.md`

#### **Option 3: Local Storage**
- No external dependencies
- Data stored in browser
- CSV export functionality
- Perfect for testing

## 🎯 Key Features Explained

### **Live Class Emphasis**
- Real-time interaction with instructors
- Small group sizes (max 8 students)
- Interactive whiteboards and screen sharing
- Q&A sessions and discussions
- Recorded sessions for review

### **International Focus**
- Multiple time zone support
- Multilingual instructor availability
- Global student community
- Cultural exchange opportunities
- Flexible scheduling options

### **Age-Appropriate Design**
- Modern, engaging interface
- Gamification elements
- Social learning features
- Progress tracking
- Achievement badges

### **Indian Market Focus**
- Pricing in Indian Rupees (₹)
- Local payment gateways
- Indian instructor team
- Regional language support
- Cultural relevance

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### **Netlify Deployment**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### **Environment Variables**
Create a `.env` file in the root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_GOOGLE_SHEETS_ID=your_sheets_id
REACT_APP_AIRTABLE_API_KEY=your_airtable_key
REACT_APP_AIRTABLE_BASE_ID=your_base_id
```

## 📊 Analytics & Tracking

### **Google Analytics**
- Track page views and user behavior
- Monitor conversion rates
- Analyze traffic sources
- Measure engagement metrics

### **Form Analytics**
- Track form submissions
- Monitor conversion funnels
- Analyze user journey
- Optimize lead generation

## 🔧 Customization

### **Branding Changes**
1. Update colors in `tailwind.config.js`
2. Modify logo and images in `public/`
3. Update content in component files
4. Change contact information

### **Adding New Courses**
1. Update course data in `src/pages/Courses.js`
2. Add course images to `public/`
3. Update pricing and descriptions
4. Modify contact form options

### **Styling Modifications**
1. Edit `src/index.css` for global styles
2. Modify component-specific styles
3. Update Tailwind classes
4. Add custom animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **Lucide** for beautiful icons
- **EmailJS** for seamless email integration
- **Google Sheets API** for data storage
- **React Community** for excellent documentation

## 📞 Support

For support and questions:
- **Email**: hello@kodezacademy.com
- **Phone**: +91 81422 00317
- **WhatsApp**: [Chat with us](https://wa.me/918142200317)

---

**Made with ❤️ for the next generation of learners** 