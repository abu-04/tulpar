module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {

        tulpar: '#E95258',
        main: '#32495E',
      },

      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#E95258',
        'secondary': '#F9F9F9',
        'danger': '#32495E',
       }),
       spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '96': '800px',
        '40.3': '40.3rem',
        '645': '645px',
        '281': '281px',
    },
          textColor: theme => theme('colors'),
      textColor: {
       
        'hero': '#32495E',
        
      },
      
      listStyleType: {

        'circle': 'circle',
        'disc': 'disc',
        'decimal': 'decimal',
        
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'tulpar': '#32495E',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       }),

      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '50%': {
            opacity: '.5',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-85%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      



  },},
  variants: {
    extend: {
        display: ['group-hover'],
        translate: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
