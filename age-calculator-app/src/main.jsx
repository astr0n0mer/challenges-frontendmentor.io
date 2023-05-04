import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider
      theme={{
        backgroundColor: {
          body: "hsl(0, 0%, 94%)",
          calculator: "hsl(0, 0%, 100%)",
        },
        color: {
          primary: "hsl(0, 0%, 8%)",
          input: "hsl(0, 0%, 86%)",
          placeholder: "hsl(0, 1%, 44%)",
          highlight: "hsl(259, 100%, 65%)",
          error: "hsl(0, 100%, 67%)",
        },
        fontFamily: {
          primary: `"Poppins", sans-serif`,
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
