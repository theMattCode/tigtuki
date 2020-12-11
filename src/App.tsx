import React from "react";
import "./App.scss";
import { Button, Intent } from "@blueprintjs/core";

function App() {
  return (
    <div className="bp3-dark">
      <Button intent={Intent.PRIMARY} text="Blueprint Example" />
    </div>
  );
}

export default App;
