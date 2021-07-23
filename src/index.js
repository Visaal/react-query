import React from "react";
import ReactDOM from "react-dom";
import ColorProvider from "./components/hooks/ColorProvider";
import "./index.css";
import App from "./App";

// export const ColorContext = createContext();
// const colors = [{ title: "red", code: "#FFEERR" }];

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
