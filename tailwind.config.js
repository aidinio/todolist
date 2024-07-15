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
            light: "#DAFFCF",
            dark: "#305e21",
          },
        },
        red: {
          foreground: "#552D33",
          background: "#ED8796",
          shadow: {
            light: "#FFB1BC",
            dark: "#96414E",
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
        yellow: {
          foreground: "#4C3D20",
          background: "#EED49F",
          shadow: {
            light: "#FFF1D4",
            dark: "#786132",
          }
        }
      },
      fontFamily: {
        serif: ['inter', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}