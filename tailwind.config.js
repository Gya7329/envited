/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: "var(--primary-font)",
          secondary: "var(--light-gray)",
          "secondary-gray": "var(--secondary-gray)",
          gradient: "var(--text-gradient)",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--bg-gradient)",
        "gradient-secondary": "var(--text-gradient)",
      },
      borderRadius: {
        primary: "var(--primary-radius)",
      },
      fontSize: {
        "primary-header": "var(--primary-header)",
      },
      lineHeight: {
        primary: "var(--primary-line-height)",
      },
      outlineColor: {
        primary: "var(--primary-font)",
      },
      backgroundColor: {
        primary: "var(--body-bg)",
      },
    },
  },
  plugins: [],
};
