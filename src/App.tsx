import React from "react";
import RenderElement from "./components/RenderElement";
import jsonData from "./input.json";
import { parseElement } from "./utils";

const elements = jsonData.map(parseElement);

const App: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <RenderElement element={elements[0]} />
    </div>
  );
};

export default App;
