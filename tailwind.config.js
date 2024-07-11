/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./src/*.vue", "./src/components/*.vue"],
  theme: {
    extend: {
      colors: {
        blue: {
          foreground: "#CAD3F5",
          background: {
            1: "#181926",
            2: "#1E2030",
          },
          shadow: {
            light: "#323551",
            dark: "#000000",
          },
        },
        green: {
          foreground: "#2F3E2A",
          background: "#A6DA95",
          shadow: {
            light: "#CBF3BD",
            dark: "#6FA35E",
          },
        },
        red: {
          foreground: "#552D33",
          background: "#ED8796",
          shadow: {
            light: "#FFB1BC",
            dark: "#AD6771",
          },
        },
        purple: {
          foreground: "#392B49",
          background: "#C6A0F6",
          shadow: {
            light: "#ECDCFF",
            dark: "#7E62A1",
          },
        },
      },
      fontFamily: {
        serif: ['inter', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}