/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "4xl": "0px 0px 18px rgba(0, 0, 0, 0.12)",
        "5xl":
          "40px 0px 70px rgba(121, 121, 121, 0.05), -40px 100px 70px rgba(121, 121, 121, 0.05)",
        "3xl":
          "40px 0px 70px rgba(123, 67, 67, 0.07), -40px 100px 70px rgba(122, 79, 79, 0.07)",
      },
      colors: {
        blues: "#14183E",
        navbar: "#747582",
        banner3: "#CED1E5",
        service: "#A9A9A9",
        banner:"#282C4B",
        sol1:"#3d51e1",
        sol2:"#627193",
        sol3:"#00005c",
        tech:"#040404"
      },
    },
  },
  plugins: [],
};
