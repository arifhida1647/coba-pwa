import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        hijau: '#8BAC3E',
        tosca: '#40A2B1',
        biruTua: '#405EB6',
        pink: '#B23F74',
        hijau2: '#A4B441',
        hijau3: '#F0FEEB',
        hijau4: '#F3F7D9',
        tosca2: '#E6F3F5',
        biru2: '#EAEEFA',
        pink2: '#F9EEF3',
        footnote: '#F9FFF6'
        // Tambahkan warna lain sesuai kebutuhan
      },
      fontFamily:{
        rubik: ['Poppins',' sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
