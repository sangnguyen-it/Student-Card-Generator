# 🤝 Contributing to Global Student Card Generator

Thank you for your interest in contributing to the Global Student Card Generator! We welcome contributions from developers of all skill levels.

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Issue Guidelines](#issue-guidelines)

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Git
- Modern web browser

### Setup Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/student-card-generator.git
   cd student-card-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Verify setup**
   - Open http://localhost:3000
   - Test all three university generators
   - Verify photo generation and download functionality

## 🔄 Development Workflow

### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `style/description` - UI/UX improvements

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting, UI changes
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**
```bash
feat(ui): add photo selection thumbnails
fix(canvas): resolve image loading CORS issues
docs(readme): update installation instructions
```

## 💻 Code Style

### JavaScript Guidelines
- Use ES6+ features
- Follow camelCase naming convention
- Use async/await for asynchronous operations
- Add JSDoc comments for functions
- Handle errors gracefully with user-friendly messages

### HTML Guidelines
- Use semantic HTML5 elements
- Maintain accessibility standards (WCAG 2.1)
- Use proper heading hierarchy
- Include alt text for images

### CSS Guidelines
- Use CSS custom properties (variables)
- Follow mobile-first responsive design
- Use meaningful class names
- Maintain consistent spacing and typography

### File Organization
```
📁 Project Structure
├── 📄 *.html - Page templates
├── 📄 *-card.js - Card generation logic
├── 📄 styles.css - Global styles
├── 📄 proxy-server.js - Backend logic
└── 📁 assets/ - Static files
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All university generators work correctly
- [ ] Photo selection and preview function properly
- [ ] Card download generates valid PNG files
- [ ] Responsive design works on mobile/tablet
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Error handling displays appropriate messages

### Testing New Features
1. Test happy path scenarios
2. Test error conditions
3. Verify mobile responsiveness
4. Check accessibility with screen readers
5. Test in multiple browsers

## 📝 Submitting Changes

### Pull Request Process

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow code style guidelines
   - Add appropriate comments
   - Test thoroughly

3. **Commit changes**
   ```bash
   git add .
   git commit -m "feat(scope): description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Use descriptive title and description
   - Reference related issues
   - Include screenshots for UI changes
   - Explain testing performed

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser testing done
- [ ] Mobile responsiveness verified

## Screenshots
[Include screenshots for UI changes]

## Related Issues
Fixes #[issue number]
```

## 🐛 Issue Guidelines

### Bug Reports
Include:
- **Environment**: OS, browser, version
- **Steps to reproduce**: Detailed steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Console errors**: Browser console output

### Feature Requests
Include:
- **Problem description**: What problem does this solve?
- **Proposed solution**: How should it work?
- **Alternatives considered**: Other approaches
- **Use cases**: Who would benefit?

### Issue Labels
- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority:high` - Urgent issues
- `priority:low` - Can wait

## 🎯 Areas for Contribution

### High Priority
- [ ] Add more university templates
- [ ] Improve photo loading performance
- [ ] Enhanced error handling
- [ ] Mobile UX improvements
- [ ] Accessibility enhancements

### Medium Priority
- [ ] Dark mode support
- [ ] Additional card layouts
- [ ] Batch card generation
- [ ] Export to PDF format
- [ ] Custom logo upload

### Documentation
- [ ] API documentation
- [ ] Video tutorials
- [ ] Translation to other languages
- [ ] Code examples

## 📚 Resources

### Useful Links
- [Project Documentation](README.md)
- [Issue Tracker](https://github.com/hungvu25/student-card-generator/issues)
- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Responsive Design Guidelines](https://web.dev/responsive-web-design-basics/)

### External APIs
- [ThisPersonNotExist.org](https://thispersonnotexist.org) - AI photo generation
- [Barcode API](https://barcode.tec-it.com) - Barcode generation

## 🤔 Questions?

- 💬 Join discussions in [GitHub Discussions](https://github.com/hungvu25/student-card-generator/discussions)
- 📧 Email maintainers for private questions
- 🐛 Create an issue for bugs or feature requests

## 📜 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive experience for everyone, regardless of:
- Background and identity
- Level of experience
- Nationality or personal appearance
- Race, ethnicity, or religion
- Sexual identity and orientation

### Expected Behavior
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior
- Harassment, trolling, or discriminatory language
- Personal attacks or political discussions
- Publishing private information without permission
- Any conduct that could be considered inappropriate

---

**Thank you for contributing to Global Student Card Generator! 🎉**

*Every contribution, no matter how small, makes a difference!*
