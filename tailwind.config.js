/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'hub-blue': {
          DEFAULT: 'rgb(10, 151, 217)', // PMS 7461C (R10 G151 B217)
          'dark': 'rgb(25, 72, 106)',   // PMS 294C (R25 G72 B106)
          'light': 'rgb(38, 189, 226)'  // PMS 638C (R38 G189 B226)
        },
        'hub-gray': 'rgb(241, 241, 241)', // PMS Cool Gray 1C (R241 G241 B241)
      },
      fontFamily: {
        'museo': ['Museo Sans', 'sans-serif'],
        'sans': ['Museo Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float1': 'float1 6s ease-in-out infinite',
        'float2': 'float2 8s ease-in-out infinite',
        'float3': 'float3 10s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-15px) translateX(15px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(20px) translateX(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
