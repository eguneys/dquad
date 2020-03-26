import QuadTree from './quadtree';

export default function QuadList(x, y, w, h, depth) {

  let body = new QuadTree(x, y, w, h, [], depth);

  let objects = [];

  const safeRemoveFromArray = (arr, item) => {
    let i = arr.indexOf(item);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };

  this.debug = () => {
    body.traverse((data, rect, index) => {
      // console.log(data, rect, index);
      console.log(Math.round(rect.x), Math.round(rect.y), Math.round(rect.width));
    });
  };

  this.traverse = body.traverse;

  this.objects = () => objects;

  this.each = (fn) => { objects.forEach(fn); };

  this.insertWithRectangle = (tRect, item) => {
    objects.push(item);
    body.insertWithRectangle(tRect, () => [], (list) => {
      list.push(item);
    });
  };

  this.deleteWithRectangle = (tRect, item) => {
    safeRemoveFromArray(objects, item);

    body.insertWithRectangle(tRect, () => [], (list) => {
      safeRemoveFromArray(list, item);
    });
  };

  this.queryItemsWithRectangle = (r, fn) => {
    body.queryWithRectangle(r, (list) => {
      list.forEach(fn);
    });
  };

  this.queryItemListWithRectangle = (r, fn) => {
    body.queryWithRectangle(r, fn);
  };
}
