module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '12': '3.5rem'
      },
      width: {
        'wdesk' : '540px'
      },
      height: {
        'hdesk' : '475px'
      },
      screens: {
        'desktop': '1440px',
      },
      margin: {
        '-23': '0.550rem'
      },
      fontSize: {
        xs: '0.70rem'
      },
      colors: {
        mred: 'hsl(0, 100%, 74%)',
        mgreen: 'hsl(154, 59%, 51%)',
        mblue: 'hsl(248, 32%, 49%)',
        darkblue: 'hsl(249, 10%, 26%)',
        grayblue: 'hsl(246, 25%, 77%)'
      },
      backgroundImage: theme => ({
        desktop: "url('./assets/bg-intro-desktop.png');",
        mobile: "url('./assets/bg-intro-mobile.png');"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
