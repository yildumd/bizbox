// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'typing': 'typing 3.5s steps(40) forwards, blink-caret 0.75s step-end infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-text': 'pulseText 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-vertical': 'floatVertical 8s ease-in-out infinite',
        'float-horizontal': 'floatHorizontal 7s ease-in-out infinite',
        'float-diagonal': 'floatDiagonal 9s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'blink-caret': 'blinkCaret 0.75s step-end infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'orb-slow': 'orbSlow 20s linear infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blinkCaret: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'rgb(37, 99, 235)' },
        },
        pulseText: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        floatVertical: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        floatHorizontal: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        floatDiagonal: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(15px, -20px) rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { 
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        orbSlow: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, 50px)' },
          '50%': { transform: 'translate(0, 100px)' },
          '75%': { transform: 'translate(-50px, 50px)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      }
    },
  },
  plugins: [],
}