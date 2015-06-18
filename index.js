var widths = [ 416, 832, 1664, 3328, 6656, 13312 ]
var best = 5

module.exports = function (maxSize) {
  if (typeof maxSize !== 'number') {
    throw new TypeError('must specify maxSize number')
  }

  for (var zoom = best; zoom >= 0; zoom--) {
    if (maxSize >= widths[zoom]) {
      return zoom
    }
  }
  return -1
}
