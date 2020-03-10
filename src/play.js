import * as geometry from './geometry';
import Destructible from './destructible';

const { rect, circle } = geometry;

function rgba(r, g, b, a = 1) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default function Play(ctx) {
  const { canvas, graphics: g } = ctx;

  const { width, height } = canvas;

  const
  black = rgba(0),
  blue = rgba(100, 100, 255, 0.5),
  red = rgba(255, 100, 100, 0.5),
  green = rgba(100, 255, 100, 0.5),
  darkblue = rgba(100, 100, 255),
  darkred = rgba(255, 100, 100),
  darkgreen = rgba(100, 255, 100);  

  const
  stateHidden = {
    hidden: true
  },
  stateVisible = {
    hidden: false
  };

  let bs = {
    x: width * 0.1,
    y: height * 0.1,
    w: width * 0.8,
    h: height * 0.8
  };

  let tiles;

  this.init = () => {
    tiles = new Destructible(bs.x, bs.y, bs.w, bs.h, stateVisible, 6);

    //tiles.modifyByCircle(circle(bs.x, bs.y, bs.w * 0.2), stateHidden);

    tiles.modifyByCircle(circle(bs.x + bs.w * 0.5, bs.y + bs.h * 0.5, bs.w * 0.2), stateHidden);

    tiles.modifyByCircle(circle(bs.x + bs.w * 0.5, bs.y + bs.h * 0.4, bs.w * 0.1), stateVisible);

    // tiles.modifyByCircle(circle(bs.x + bs.w * 0.5, bs.y + bs.h * 0.5, bs.w * 0.3), stateVisible);

    // tiles.modifyByCircle(circle(100, 100, 20, 20), stateHidden);

    tiles.modifyByRectangle(rect(bs.x + 400, bs.y + 10, bs.w * 0.5, bs.h * 0.3), stateHidden);
  };

  this.update = () => {
  };


  const render = () => {
    tiles.traverse((data, rect, index) => {
      if (data.hidden) {
        g.srect(rect.x, rect.y, rect.width, rect.height, red, darkred);
      } else {
        g.srect(rect.x, rect.y, rect.width, rect.height, green, darkgreen);
      }
    });
  };

  this.render = () => {

    g.clear(black);

    debug();

    render();
  };

  const debug = () => {

    const w = 20;

    let lw = 2;

    g.srect(lw, lw, w, w, red, darkred);
    g.srect(w * 1 + lw * 2, lw, w, w, blue, darkblue);
    g.srect(w * 2 + lw * 3, lw, w, w, green, darkgreen);
  };


}
