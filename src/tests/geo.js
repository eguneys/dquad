import { log, ok, is, not, deep_is } from 'testiz/browser';

import * as geometry from '../dquad/geometry';

const { rect, line, circle } = geometry;

export default function geotest() {

  rectTest();
  circleTest();
}



function circleTest() {

  log('circle');

  let a = circle(0, 0, 10);

  let center = [0, 0],
      inP = [0, 10],
      outP = [0, 11];

  let inLine = line([10, 0],
                    [10, 10]),
      inLine2 = line([10, 10],
                     [10, 0]),
      inLine3 = line([10, 10],
                     [10, -1]),
      outLine = line([11, 0],
                     [11, 10]);


  deep_is('circle contains point', [
    a.containsPoint(center[0], center[1]),
    a.containsPoint(inP[0], inP[1]),
    a.containsPoint(outP[0], outP[1])
  ], [true, true, false]);

  deep_is('circle intersects line', [
    a.intersectsLine(inLine),
    a.intersectsLine(inLine2),
    a.intersectsLine(inLine3),
    a.intersectsLine(outLine)
  ], [true, true, true, false]);
  
}

function rectTest() {

  log('rectangle');

  let a = rect(0, 0, 100, 100);
  let b = rect(0, 0, 10, 10);
  let c = rect(0, 90, 10, 10);
  let d = rect(1, 90, 10, 9);
  let e = rect(0, 101, 10, 10);

  deep_is('rect doesnt contain edge', [
    a.contains(b),
    a.contains(c)
  ], [false, false]);
  is('rect contains', a.contains(d), true);
  
  is('rect intersects', a.intersects(b), true);
  is('rect doesnt intersects', a.intersects(e), false);
}
