import React from "react";
import BlockPanel from "./components/BlockPanel";
import FlowCanvas from "./components/FlowCanvas";
//import "./index.css"; // Assuming this contains global or custom styles

export default function App() {
  return (
    <div className="d-flex vh-100">
      <FlowCanvas />
      <BlockPanel />
    </div>
      );
    }