/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",

        "shortly-cyan": "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        "shortly-red": "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",

        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",

        softBlue0: "hsl(231, 69%, 60%)",
        softRed0: "hsl(0, 94%, 66%)",
        grayishBlue0: "hsl(229, 8%, 60%)",
        veryDarkBlue0: "hsl(229, 31%, 21%)"
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
        alata: ["Alata"],
        opensans: ["Open Sans", "sans-serif"]
      },
      spacing: {
        180: "32rem"
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('assets/fylo/images/logo-dark-mode.svg')",
        "logo-light-mode": "url('assets/fylo/images/logo-light-mode.svg')",
        "curvy-dark-mode": "url('assets/fylo/images/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('assets/fylo/images/bg-curvy-light-mode.svg')",
        dots: "url('assets/bookmark/images/bg-dots.svg')"
      })
    }
  },
  variants: {
    extend: {
      backgroundImage: ["dark"]
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
};

