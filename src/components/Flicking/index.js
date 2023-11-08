import Flicking from "@egjs/flicking";
import { Perspective } from "@egjs/flicking-plugins";

const flicking = new Flicking("#flick", {
  circular: true,
});

flicking.addPlugins(
  new Perspective({
    rotate: -1,
    scale: 2,
    perspective: 600,
  })
);

<div id="flick" class="flicking-viewport">
  <div class="flicking-camera">
    <div class="card-panel">1</div>
    <div class="card-panel">2</div>
    <div class="card-panel">3</div>
    <div class="card-panel">4</div>
    <div class="card-panel">5</div>
    <div class="card-panel">6</div>
  </div>
</div>;

export default flicking;
