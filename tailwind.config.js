const colors = require('tailwindcss/colors');

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['font-sans', 'sans-serif'],
        serif: ['font-sans', 'serif'],
      },
      colors: {
        primary: {
          "50": "#286ab8",
          "100": "#286ab8",
          "200": "#286ab8",
          "300": "#286ab8",
          "400": "#286ab8",
          "500": "#286ab8",
          "600": "#286ab8",
          "700": "#286ab8",
          "800": "#286ab8",
          "900": "#286ab8",
          "950": "#286ab8"
        },
        secondary: {
          "50": "#121220",
          "100": "#121220",
          "200": "#121220",
          "300": "#121220",
          "400": "#121220",
          "500": "#121220",
          "600": "#121220",
          "700": "#121220",
          "800": "#121220",
          "900": "#121220",
          "950": "#121220"
        },

        provider: {
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
};
