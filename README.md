# SnapKeys 🔑

**SnapKeys** is an interactive English language proficiency quiz application with a stunning sci-fi interface inspired by Star Trek's LCARS design system. Test your English skills with timed quizzes, keyboard shortcuts, and adaptive learning features.

## ✨ Features

### 🎯 Core Functionality
- **Timed Quiz**: 20-minute countdown timer with visual warnings
- **Adaptive Learning**: Wrong answers are automatically retried after 5 questions
- **Proficiency Assessment**: CEFR-based scoring (A1-C2 levels)
- **Keyboard Navigation**: Full keyboard support for faster interaction
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 🎨 Visual Design
- **Sci-Fi Interface**: LCARS-inspired design with authentic color scheme
- **Animated Starfield**: Dynamic star animation background
- **Real-time Feedback**: Immediate visual feedback for correct/incorrect answers
- **Modern Typography**: Clean, technical font (Space Mono) for excellent readability

### ⌨️ Keyboard Shortcuts
- **1-9 Keys**: Select answer options quickly
- **Enter**: Proceed to next question or see results  
- **Spacebar**: Start quiz (when on start screen)

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Download all project files:
   - `index.html`
   - `script.js`
   - `styles.css`
   - `data.js`

2. Place all files in the same directory

3. Open `index.html` in your web browser

### File Structure
```
snapkeys/
├── index.html      # Main HTML structure
├── script.js       # Core application logic
├── styles.css      # LCARS-inspired styling
└── data.js         # Quiz questions database
```

## 🎮 How to Use

### Starting a Quiz
1. Click **"Start Quiz"** or press **Spacebar**
2. The 20-minute timer begins automatically
3. Answer questions using mouse clicks or keyboard shortcuts

### During the Quiz
- **Select Answers**: Click options or press number keys (1-4)
- **Next Question**: Click "Next" or press **Enter**
- **Monitor Time**: Watch the timer in the top-right corner

### Scoring System
- **Minimum Questions**: Answer at least 50 questions for proficiency assessment
- **CEFR Levels**:
  - **A1 (Beginner)**: 0-59%
  - **A2 (Pre-Intermediate)**: 60-69%
  - **B1 (Intermediate)**: 70-79%
  - **B2 (Upper-Intermediate)**: 80-89%
  - **C1 (Advanced)**: 90-94%
  - **C2 (Proficient)**: 95-100%

## 🔧 Customization

### Adding Questions
Edit `data.js` to add new questions:

```javascript
{
  question: "Your question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: "Option A"
}
```

### Modifying Timer
Change the quiz duration in `script.js`:
```javascript
const QUIZ_TIME = 20 * 60; // 20 minutes in seconds
```

### Adjusting Retry Logic
Modify when wrong answers reappear:
```javascript
const RETRY_AFTER = 5; // Questions to wait before retry
```

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#ff8a00` (LCARS Orange)
- **Accent Cyan**: `#00c0c0` (LCARS Cyan)
- **Warning Yellow**: `#ffff00` (LCARS Yellow)
- **Error Red**: `#ff0000` (Alert Red)
- **Background**: `#000000` (Deep Space Black)
- **Text**: `#c0c0c0` (Light Grey)

### Typography
- **Font Family**: Space Mono (monospace)
- **Headings**: Bold, uppercase with letter spacing
- **Body Text**: Regular weight, optimized line height

## 📱 Responsive Breakpoints

- **Desktop**: 1150px+ (Full features)
- **Tablet**: 768px - 1149px (Optimized layout)
- **Mobile**: 480px - 767px (Compact design)
- **Small Mobile**: <480px (Minimal interface)

## 🛠️ Technical Details

### Browser Compatibility
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Performance Features
- **Hardware Acceleration**: CSS transforms and animations
- **Efficient Rendering**: Will-change properties for smooth animations
- **Memory Management**: Proper cleanup of intervals and event listeners

### Dependencies
- **Font Awesome**: 6.0.0 (icons)
- **Google Fonts**: Space Mono (typography)
- **No JavaScript frameworks** required

## 🤝 Contributing

### Adding Content
1. **Questions**: Add to `data.js` following the existing format
2. **Styling**: Modify `styles.css` while maintaining LCARS theme
3. **Features**: Extend `script.js` with new functionality

### Code Style
- Use ES6+ JavaScript features
- Follow existing naming conventions
- Maintain responsive design principles
- Preserve accessibility features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

**Quiz won't start**
- Ensure all files are in the same directory
- Check browser console for JavaScript errors

**Timer not working**
- Verify browser supports modern JavaScript
- Check if popup blockers are interfering

**Keyboard shortcuts not responding**
- Click on the quiz container to focus
- Ensure browser window is active

**Styling issues**
- Confirm internet connection for external fonts
- Try hard refresh (Ctrl+F5)

### Browser Requirements
- JavaScript enabled
- CSS3 support
- Modern DOM APIs

## 🎯 Future Enhancements

- **Categories**: Subject-specific question sets
- **Multiplayer**: Competitive quiz modes
- **Analytics**: Detailed performance tracking
- **Accessibility**: Enhanced screen reader support
- **Offline Mode**: Service worker integration

---

**Made with 💫 for English language learners worldwide**

*Experience the future of language learning with SnapKeys!*
