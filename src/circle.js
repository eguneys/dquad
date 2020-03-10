export default function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;

  let P = this.P = [x, y];

  this.containsRect = rect => {
    return false;
  };

  this.containsPoint = (a, b) => {
    let dx = (x - a) * (x - a);
    let dy = (y - b) * (y - b);
    return (dx + dy) <= (radius * radius);    
  };

  this.intersectsRect = rect =>
  rect.containsPoint(P) ||
    this.intersectsLine(rect.AB) ||
    this.intersectsLine(rect.BC) ||
    this.intersectsLine(rect.CD) ||
    this.intersectsLine(rect.DA);


  this.intersectsLine = line =>
  false;

}

export function circle(x, y, radius) {
  return new Circle(x, y, radius);
}
