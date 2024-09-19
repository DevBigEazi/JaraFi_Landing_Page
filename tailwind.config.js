/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		fontSize: {
			xs: ["12px", "16px"],
			sm: ["14px", "20px"],
			base: ["16px", "19.5px"],
			lg: ["18px", "21.94px"],
			xl: ["20px", "24.38px"],
			"2xl": ["24px", "29.26px"],
			"3xl": ["28px", "50px"],
			"4xl": ["48px", "58px"],
			"8xl": ["96px", "106px"],
		},
		extend: {
			fontFamily: {
				MerriweatherSans: ["Merriweather Sans", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "#0F0140",
				darkslateBlue: "#1D143E",
				black: "#262526",
				linen: "#F2EDE4",
				yellow: "#EAF206",
				whitesmoke: "#F9F6F3",
				white: "#FFFFFF",
			},
		},
	},
	plugins: [],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        MerriweatherSans: ["Merriweather Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0F0140",
        darkslateBlue: "#1D143E",
        black: "#262526",
        linen: "#F2EDE4",
        yellow: "#EAF206",
        whitesmoke: "#F9F6F3",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
