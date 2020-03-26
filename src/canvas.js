export default function Canvas(element) {
  
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  element.append(canvas);

  let displayWidth = element.clientWidth,
      displayHeight = element.clientHeight;

  canvas.width = this.width = displayWidth;
  canvas.height = this.height = displayHeight;

  this.bounds = element.getBoundingClientRect();

  this.ctx = ctx;

}
