/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007AFF',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#5856D6',
          foreground: '#FFFFFF'
        },
        background: '#FFFFFF',
        foreground: '#000000',
        muted: {
          DEFAULT: '#F2F2F7',
          foreground: '#8E8E93'
        },
        accent: {
          DEFAULT: '#FF9500',
          foreground: '#FFFFFF'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#000000'
        },
        border: '#C6C6C8',
        input: '#E5E5EA',
        ring: '#007AFF',
        destructive: {
          DEFAULT: '#FF3B30',
          foreground: '#FFFFFF'
        }
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px'
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
        '48': '192px',
        '56': '224px',
        '64': '256px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
    },
  },
  plugins: [],
}

