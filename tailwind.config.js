module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_02": "var(--black_900_02)",
          "900_26": "var(--black_900_26)",
          "900_3f": "var(--black_900_3f)",
          "900_44": "var(--black_900_44)",
        },
        blue_gray: { 300: "var(--blue_gray_300)", 700: "var(--blue_gray_700)" },
        deep_orange: {
          50: "var(--deep_orange_50)",
          700: "var(--deep_orange_700)",
          "700_01": "var(--deep_orange_700_01)",
        },
        deep_purple: { a200: "var(--deep_purple_a200)" },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          300: "var(--gray_300)",
          900: "var(--gray_900)",
          "50_01": "var(--gray_50_01)",
          "50_02": "var(--gray_50_02)",
          "50_03": "var(--gray_50_03)",
          "900_0c": "var(--gray_900_0c)",
        },
        green: { 50: "var(--green_50)", 500: "var(--green_500)", "500_01": "var(--green_500_01)" },
        indigo: { a200: "var(--indigo_a200)" },
        white: { a700: "var(--white_a700)" },
        yellow: { 900: "var(--yellow_900)", "900_01": "var(--yellow_900_01)" },
      },
      boxShadow: {
        xs: "0 1px 3px 1px #00000026",
        sm: "0 1px 2px 0 #1018280c",
        md: "4px 4px 8px 0 #00000044",
        lg: "0 4px 4px 0 #0000003f",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #e06016,#e57115,#eb8314)",
        gradient1: "linear-gradient(210deg, #eb8314,#df6015)",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
