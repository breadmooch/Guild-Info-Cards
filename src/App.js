import React from "react";
// import NinjaCarousel from "./components/GuildCarousel.js";
// import * as images from "../src/components/images";
import Flicking from "../src/components/Flicking/index.js";

const App = () => {
  // const ninjaCards = [
  //   images.gara,
  //   images.naruto,
  //   images.sasuke,
  //   images.sakura,
  //   images.kabuto,
  // ];

  return (
    <div className="App">
      <h1>Ninja Info Cards</h1>
      {/* <NinjaCarousel images={ninjaCards} /> */}
      <Flicking />
    </div>
  );
};

export default App;
