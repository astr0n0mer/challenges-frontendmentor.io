import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider
      theme={{
        backgroundColor: {
          body: "hsl(265, 19%, 14.5%)",
          cardTop: "hsl(240, 21%, 22%)",
          cardBottom: "hsl(235, 20%, 25%)",
          cardDots: "hsl(234, 17%, 12%)",
        },
        color: {
          heading: "hsl(0, 0%, 100%)",
          primary: "hsl(345, 95%, 68%)",
          secondary: "hsl(237, 18%, 59%)",
        },
        media: {
          tabletStart: 768,
        },
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
