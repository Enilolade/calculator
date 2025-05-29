module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "calc-bg": "var(--calc-bg)",
        "toggle-keypad-bg": "var(--toggle-keypad-bg)",
        "screen-bg": "var(--screen-bg)",
        "del-reset-bg": "var(--del-reset-bg)",
        "toggle-equal-btn-bg": "var(--toggle-equal-btn-bg)",
        "key-bg": "var(--key-bg)",
        "key-color": "var(--key-color)",
        "text-color": "var(--text-color)",
      },
      textColor: {
        key: "var(--key-color)",
        "del-reset": "var(--del-reset-color)",
      },
      boxShadow: {
        "del-reset": "0px 4px var(--del-reset-bg-shadow)",
        "toggle-equal": "0px 4px var(--toggle-equal-btn-shadow)",
        key: "0px 4px var(--key-bg-shadow)",
      },
    },
  },
  plugins: [],
};
