module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '500': '500ms',
        '2000': '2000ms',
      },
      
      screens: {
        'md': {'min': '768px', 'max': '1023px'},
      },
    
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}
