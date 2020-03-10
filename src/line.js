export default function Line(a, b) {

  this.A = a;
  this.B = b;

}

export function line(x, y) {
  return new Line(x, y);
}
