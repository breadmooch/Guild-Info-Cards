import React from "react";
import NinjaCarousel from "./components/GuildCarousel.js";
import * as images from "../src/components/images";

const App = () => {
  const ninjaCards = [
    images.gara,
    images.naruto,
    images.sasuke,
    images.sakura,
    images.kabuto,
  ];

  return (
    <div className="App">
      <h1>Ninja Info Cards</h1>
      <NinjaCarousel images={ninjaCards} />
    </div>
  );
};

export default App;
