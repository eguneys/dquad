import Loop from 'loopz';

import Events from './events';
import Graphics from './graphics';
import Canvas from './canvas';
import Play from './play';
import Play2 from './play2';

export function app(element, options) {

  let canvas = new Canvas(element);

  let graphics = new Graphics(canvas);

  let events = new Events(canvas);
  events.bindTouch();

  let ctx = {
    canvas,
    graphics,
    events
  };

  let play = new Play2(ctx);
  play.init(options);

  new Loop(delta => {
    play.update(delta);
    play.render();
  }).start();
}
