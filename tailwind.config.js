module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary-color': '#00ABF0',
        'second-primary-color': '#112E42',
        'card-hover': '#0C2E47',
        'text-color': '#EDEDED',
        'button-text': '#081B29',
      },
      maxWidth: {
        'container': '1200px',
      },
      
    },
  },
  
 plugins: [
  require('tailwind-scrollbar'),
 ],
};