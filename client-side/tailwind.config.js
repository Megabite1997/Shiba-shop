/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s",
        "tilt-shaking": "tilt_shaking 0.5s infinite",
        "scroll-down": "down 1.5s infinite",
      },
      backgroundImage: {
        "shiba-smile": "url('/src/assets/shiba/shiba-no-bg.png')",
      },
      colors: {
        "shiba-yellow": "#fdc724",
        antiquewhite: "#faebd7",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Merriweather: ["Merriweather", "sans-serif"],
      },
      fontSize: {
        ss: ["10px", "14px"],
      },

      width: {
        54: "200px",
        57: "228px",
      },

      height: {
        "screen-90": "90vh",
        "screen-91": "91vh",
        "screen-92": "92vh",
        "screen-93": "93vh",
        "screen-94": "94vh",
        "screen-95": "95vh",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        tilt_shaking: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(0eg)" },
          "75% ": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        down: {
          "0%": {
            transform: "translate(0)",
          },
          "20%": {
            transform: "translateY(15px)",
          },
          "40%": {
            transform: "translate(0)",
          },
        },
      },

      margin: {
        12.5: "50px",
        13: "52px",
      },

      maxWidth: {
        0: "0px",
        px: "1px",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        4: "16px",
        4.5: "18px",
        5: "20px",
        5.5: "22px",
        6: "24px",
        6.5: "26px",
        7: "28px",
        7.5: "30px",
        8: "32px",
        8.5: "34px",
        9: "36px",
        9.5: "38px",
        10: "40px",
        10.5: "42px",
        11: "44px",
        11.5: "46px",
        12: "48px",
        12.5: "50px",
        13: "52px",
        13.5: "54px",
        14: "56px",
        14.5: "58px",
        15: "60px",
        15.5: "62px",
        16: "64px",
        16.5: "66px",
        17: "68px",
        17.5: "70px",
        18: "72px",
        18.5: "74px",
        19: "76px",
        19.5: "78px",
        20: "80px",
        20.5: "82px",
        21: "84px",
        21.5: "86px",
        22: "88px",
        22.5: "90px",
        23: "92px",
        23.5: "94px",
        24: "96px",
        24.5: "98px",
        25: "100px",
        80: "320px",
        "1/2": "50%",
      },
      maxHeight: {
        0: "0px",
        px: "1px",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        4: "16px",
        4.5: "18px",
        5: "20px",
        5.5: "22px",
        6: "24px",
        6.5: "26px",
        7: "28px",
        7.5: "30px",
        8: "32px",
        8.5: "34px",
        9: "36px",
        9.5: "38px",
        10: "40px",
        10.5: "42px",
        11: "44px",
        11.5: "46px",
        12: "48px",
        12.5: "50px",
        13: "52px",
        13.5: "54px",
        14: "56px",
        14.5: "58px",
        15: "60px",
        15.5: "62px",
        16: "64px",
        16.5: "66px",
        17: "68px",
        17.5: "70px",
        18: "72px",
        18.5: "74px",
        19: "76px",
        19.5: "78px",
        20: "80px",
        20.5: "82px",
        21: "84px",
        21.5: "86px",
        22: "88px",
        22.5: "90px",
        23: "92px",
        23.5: "94px",
        24: "96px",
        24.5: "98px",
        25: "100px",
      },
    },
  },
  plugins: [],
};
