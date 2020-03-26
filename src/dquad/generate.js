import { rect } from './geometry';

export default function Generate(x, y, w, h) {

  const getRandomPointInCircle = (radius) => {
    let t = 2 * Math.PI * Math.random();
    let u = Math.random() + Math.random();
    let r;

    if (u > 1) { 
      r = 2-u;
    } else { 
      r = u;
    };
    
    return [radius * r * Math.cos(t),
            radius * r * Math.sin(t)];
  };


  this.generate = () => {
    let p = getRandomPointInCircle(h * 0.5);

    return rect(x + h * 0.5 + p[0], y + h * 0.5 + p[1], 10, 10);
  };

}
