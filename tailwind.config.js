/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./{html,js}",
    "./public/**/*.{html,js}",
    "./index.html" // если есть файл index.html в корне
  ],
  theme: {
    extend: {
        keyframes: {
          spinLeft: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(-360deg)' },
          },
          spinRight: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          spinLeft: 'spinLeft 10s linear infinite',
          spinRight: 'spinRight 10s linear infinite',
        },

      colors: {
        primary: '#00337D',  // Основной синий цвет
        secondary: '#003F2C',  // Вторичный серо-синий
        accent: '#003F2C',  // Акцентный оранжевый
        background: '#F1F5F9',  // Цвет фона
        surface: '#FFFFFF',  // Белый для поверхностей
        error: '#EF4444',  // Красный для ошибок
        success: '#800020',  // Зеленый для успеха
        warning: '#262626',  // Желтый для предупреждений
        info: '#3B82F6',  // Голубой для информационных сообщений
        'custom-hover': '#0d0d0d', // Ваш кастомный цвет
      },
      backgroundColor: {
        'custom-hover': '#0d0d0d',
      },
      screens: {
        'xs': '480px',  // Экстра маленький экран (телефоны)
        'sm': '640px',  // Маленький экран (мобильные устройства)
        'md': '768px',  // Средний экран (планшеты)
        'lg': '1024px', // Большой экран (ноутбуки)
        'xl': '1280px', // Очень большой экран (большие экраны)
        '2xl': '1536px', // Экстра большой экран (десктопы)
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
        '36': '144px',
        '40': '160px',
        '44': '176px',
        '48': '192px',
        '52': '208px',
        '56': '224px',
        '60': '240px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '96': '384px',
      },
      height: {
        '56': '14rem',   // 224px
        '60': '15rem',   // 240px
        '64': '16rem',   // 256px
        '72': '18rem',   // 288px
        '80': '20rem',   // 320px
        '96': '24rem',   // 384px
        '112': '28rem',  // 448px
        '120': '30rem',  // 480px
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
        '176': '44rem',  // 704px
        '192': '48rem',  // 768px
        '208': '52rem',  // 832px
        '224': '56rem',  // 896px
        '240': '60rem',  // 960px
        '256': '64rem',  // 1024px
        '288': '72rem',  // 1152px
        '320': '80rem',  // 1280px
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],  // Основной шрифт
        serif: ['Merriweather', 'serif'],  // Альтернативный шрифт для заголовков
        mono: ['Menlo', 'monospace'],  // Моноширинный шрифт
      },
      fontSize: {
        'xs': '0.75rem',  // 12px
        'sm': '0.875rem',  // 14px
        'base': '1rem',  // 16px
        'lg': '1.125rem',  // 18px
        'xl': '1.25rem',  // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',  // 48px
        '6xl': '3.75rem',  // 60px
        '7xl': '4.5rem',  // 72px
        '8xl': '5.5rem',  // 72px
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // 2px
        'md': '0.375rem', // 6px
        'lg': '0.5rem', // 8px
        'xl': '1rem', // 16px
        '2xl': '2rem', // 32px
        'full': '9999px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0rem',
          sm: '0rem',
          md: '4rem',
          lg: '0rem',
          xl: '0rem',
        },
        screens: {
          DEFAULT: '1920px',
          'xl': '1920px',
          '2xl': '1920px',
        },
      },
    },
  },
  plugins: [],
}
