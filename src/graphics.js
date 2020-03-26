export default function Graphics({ width, height, ctx }) {

  this.clear = (color) => {
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(0, 0, width, height);
  };

  this.rect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h, color);
  };

  this.srect2 = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, w, h);
  };


  this.srect = (x, y, w, h, fill, stroke) => {
    let lW = 1;
    ctx.lineWidth = lW * 2;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.strokeRect(x, y, w, h);
    ctx.fillRect(x + lW, y + lW, w - lW, h - lW);
  };

}
