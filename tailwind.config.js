module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      inset: {
        22: "88px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.coolGray.800"),
            a: {
              color: "#853737",
            },
            strong: {
              color: "#374151",
            },
            p: {
              fontSize: "1.25rem",
              color: "rgba(29,29,29,.7)",
              lineHeight: "1.8rem",
              fontWeight: "300",
              paddingLeft: "20px",
              paddingRight: "10px",
            },
            h1: {
              color: "#4b5563",
              fontWeight: "600",
              paddingLeft: "20px",
            },
            h2: {
              paddingLeft: "20px",
              color: "#4b5563",
            },
            h3: {
              paddingLeft: "20px",
              color: "#4b5563",
              fontWeight: "600",
            },
            h4: {
              paddingLeft: "20px",
              color: "#4b5563",
              fontWeight: "600",
            },
            h5: {
              paddingLeft: "20px",
              color: "#4b5563",
              fontWeight: "600",
            },
            h6: {
              paddingLeft: "20px",
              color: "#4b5563",
              fontWeight: "600",
            },
            li: {
              paddingLeft: "20px",
              fontSize: "1.25rem",
              color: "rgba(29,29,29,.7)",
              lineHeight: "1.8rem",
              fontWeight: "300",
            },
          },
        },
      }),
      fontFamily: {
        body: ["Rubik"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
