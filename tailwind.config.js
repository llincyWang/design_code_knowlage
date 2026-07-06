/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
    },
    extend: {
      fontFamily: {
        display: ['Sora', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
        sans: ['Sora', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: "#1b1c2a",
          soft: "#4a4d63",
          faint: "#8b8fa6",
        },
        canvas: {
          DEFAULT: "#fbfbfd",
          soft: "#f4f5fb",
        },
        // 设计师视角（暖）
        designer: {
          50: "#fff5ef",
          100: "#ffe6d8",
          400: "#ff9d6c",
          500: "#f97a45",
          600: "#e8622f",
        },
        // 前端视角（冷）
        frontend: {
          50: "#eef4ff",
          100: "#dbe7ff",
          400: "#6b8bff",
          500: "#4d6bf5",
          600: "#3a52d6",
        },
        // 主强调：靛蓝→青绿
        brand: {
          50: "#edfbf7",
          100: "#d3f4ea",
          400: "#3fd0ad",
          500: "#18b596",
          600: "#0f9179",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27, 28, 42, 0.04), 0 8px 24px rgba(27, 28, 42, 0.06)",
        lift: "0 2px 4px rgba(27, 28, 42, 0.05), 0 18px 48px rgba(27, 28, 42, 0.12)",
        glow: "0 12px 40px rgba(24, 181, 150, 0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #4d6bf5 0%, #18b596 100%)",
        "mesh":
          "radial-gradient(60% 60% at 15% 10%, rgba(77,107,245,0.14) 0%, rgba(77,107,245,0) 60%), radial-gradient(55% 55% at 90% 5%, rgba(24,181,150,0.16) 0%, rgba(24,181,150,0) 55%), radial-gradient(50% 50% at 80% 90%, rgba(249,122,69,0.12) 0%, rgba(249,122,69,0) 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "dash-flow": {
          to: { "stroke-dashoffset": "-16" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease both",
        float: "float 6s ease-in-out infinite",
        "dash-flow": "dash-flow 1s linear infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};
