import React, { createContext, useContext, useState } from "react";

const colorData = [{ title: "red", code: "#FFEERR" }];

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, code) => setColors([...colors, { title, code }]);

  return (
    <ColorContext.Provider value={{ colors, addColor }}>
      {children}
    </ColorContext.Provider>
  );
}
