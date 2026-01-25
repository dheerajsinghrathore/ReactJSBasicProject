import React from "react";
import Cake from "./Features/cake/Cake";
import Pastry from "./Features/pastry/Pastry";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Blissful Bites
      </h2>
      <Cake />
      <hr />
      <Pastry />
    </div>
  );
}

export default App;
