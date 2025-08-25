# 🎓 Global Student Card Generator

<div align="center">

![Student Card Generator](https://img.shields.io/badge/Student%20Card-Generator-blue?style=for-the-badge&logo=graduation-cap)
![Version](https://img.shields.io/badge/version-2.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen?style=for-the-badge&logo=node.js)

**A professional, AI-powered student ID card generator supporting multiple universities worldwide**

[🌟 Features](#-features) • [🚀 Quick Start](#-quick-start) • [🖼️ Gallery](#-gallery) • [🛠️ Tech Stack](#-tech-stack) • [📖 Documentation](#-documentation)

</div>

---

## 🌟 Features

### 🏫 Multi-Regional Support
- **🇮🇳 MAHE University (India)** - Manipal Academy of Higher Education with authentic Indian names and departments
- **🇺🇸 US Universities** - Santa Fe College with American naming conventions and realistic academic programs  
- **🇰🇷 Seoul National University** - Premium Korean university experience with Korean names and departments

### 🎨 Professional Design
- **Seoul-Style Layout** - Modern 2-column responsive design across all universities
- **Cool Color Themes** - Eye-friendly blue and teal color schemes for better visual comfort
- **High-Quality Output** - 1600x1000px resolution cards suitable for professional use
- **Watermark System** - Official university seals and logos with proper aspect ratio preservation

### 🤖 AI-Powered Generation
- **AI-Generated Photos** - Realistic student photos via ThisPersonNotExist.org API
- **Photo Selection** - Interactive thumbnail gallery for choosing the perfect student photo
- **Smart Data Generation** - Realistic names, dates, and academic information based on regional conventions
- **Cross-Origin Handling** - Robust image loading with fallback systems

### ⚡ Advanced Features
- **Real-time Preview** - Instant card preview with live updates
- **Barcode Generation** - Dynamic barcodes with university-specific data
- **Chrome Extension** - Auto-verification system for enhanced functionality
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hungvu25/student-card-generator.git
   cd student-card-generator
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
   ```
   http://localhost:3000
   ```

### 🎯 Usage

1. **Choose Your Region** - Select from India (MAHE), US Universities, or Seoul National University
2. **Generate Card** - Click "Generate Student Card" to create a random student profile
3. **Select Photo** - Choose from AI-generated photos in the thumbnail gallery
4. **Download** - Click "Download Card" to save your high-quality student ID card

---

## 🖼️ Gallery

<div align="center">

### 🏠 Main Dashboard
*Professional region selection interface*

### 🇮🇳 MAHE University Cards
*Cool blue theme with Indian academic structure*

### 🇺🇸 US University Cards  
*Teal theme featuring Santa Fe College branding*

### 🇰🇷 Seoul National University Cards
*Premium Korean university experience*

</div>

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript** - Pure JS for optimal performance and compatibility
- **Canvas API** - High-quality image generation and manipulation

### Backend
- **Node.js** - JavaScript runtime for server-side operations
- **Express.js** - Web framework for API endpoints and static file serving
- **Proxy Server** - Custom proxy for handling external API requests and CORS

### APIs & Services
- **ThisPersonNotExist.org** - AI-generated realistic student photos
- **Barcode API** - Dynamic barcode generation for student IDs
- **Santa Fe College** - Official college seal integration

### Development Tools
- **VS Code** - Primary development environment
- **Git** - Version control and collaboration
- **Chrome DevTools** - Debugging and performance optimization

---

## 📖 Documentation

### 🏗️ Project Structure

```
student-card-generator/
├── 📄 index.html                    # Main landing page with region selection
├── 🎓 mahe-university.html          # MAHE University card generator
├── 🏛️ us-university.html            # US Universities card generator  
├── 🏫 seoul-university.html         # Seoul National University generator
├── ⚙️ mahe-university-card.js       # MAHE card generation logic
├── ⚙️ us-university-card.js         # US card generation logic
├── ⚙️ seoul-university-card.js      # Seoul card generation logic
├── 🎨 styles.css                    # Global styles and themes
├── 🖥️ proxy-server.js               # Backend proxy server
├── 📦 package.json                  # Project dependencies
├── 🖼️ logo-mahe.png                 # MAHE University logo
├── 🖼️ logous.png                    # Santa Fe College logo
└── 🔧 1NutLamNenTatCa/             # Chrome extension for auto-verification
```

### 🔧 Configuration

#### Environment Setup
```javascript
// Default server configuration
const PORT = 3000;
const HOST = 'localhost';

// API endpoints
const FACE_API = 'https://thispersonnotexist.org';
const BARCODE_API = 'https://barcode.tec-it.com';
```

#### Color Themes
```css
/* MAHE University - Cool Blue Theme */
--primary: #1e40af;
--secondary: #6366f1;

/* US Universities - Cool Teal Theme */  
--primary: #059669;
--secondary: #0891b2;

/* Seoul University - Original Theme */
--primary: #003366;
--secondary: #0066cc;
```

---

## 🎯 Features Breakdown

### 🔄 Card Generation Process
1. **Data Generation** - Random realistic student information based on regional patterns
2. **Photo Loading** - AI-generated photos fetched via secure proxy
3. **Canvas Rendering** - High-quality card composition with proper image handling
4. **Download System** - PNG export with optimized file size and quality

### 🖼️ Photo Management
- **Batch Loading** - 8 photos loaded per generation for variety
- **Thumbnail Preview** - Interactive selection with border highlighting
- **Cross-Origin Support** - Robust handling of external image sources
- **Fallback System** - Graceful degradation when APIs are unavailable

### 🎨 UI/UX Excellence
- **Loading States** - Professional loading animations and progress indicators
- **Error Handling** - User-friendly error messages with actionable guidance
- **Responsive Design** - Optimized for all screen sizes and devices
- **Accessibility** - WCAG 2.1 compliant with keyboard navigation support

---

## 🌐 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 88+ | ✅ Full |
| Firefox | 85+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 88+ | ✅ Full |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### 📋 Development Guidelines
- Follow ES6+ JavaScript standards
- Maintain responsive design principles
- Test across multiple browsers
- Document new features thoroughly
- Optimize for performance and accessibility

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ThisPersonNotExist.org** - AI-generated photos
- **Santa Fe College** - Official branding and logo usage
- **Seoul National University** - Design inspiration
- **MAHE University** - Academic structure reference
- **VS Code Community** - Development environment and extensions

---

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/hungvu25/student-card-generator/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/hungvu25/student-card-generator/discussions)
- 📧 **Contact**: [Email](mailto:your-email@example.com)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Hung Vu](https://github.com/hungvu25)

*All generated data is fictional and for demonstration purposes only*

</div>
