
var cv = require('..');

times = {};
function start(name, text) {
  text = text || name
  console.log('starting: ' + text)
  times[name] = process.hrtime()
}

function end(name, text) {
  text = text || name
  var elapsed = process.hrtime(times[name])[1]
  console.log('ending: ' + text + ' took ' + elapsed / 1000000 + 'ms')
}

function endSync(name) {
  end(name, name + ' - sync')
}

function outputAndRelease(filename, image, cb) {
  cv.saveImage.async(filename, image, null, function(err, result) {
    cv.releaseImage(image.ref())
    if (cb) cb()
  })
}

// can't run this async on mac, due to event loop
//var camera = cv.captureFromCAM(-1)
//cv.queryFrame.async(camera, function(err, img_orig) {

cv.loadImage.async('data/input.jpg', 1, function(err, img_orig) {

  console.log('starting')

  var size = cv.getSize(img_orig)
  var img_gray = cv.createImage(size, 8, 1)
  var img_edges = cv.createImage(size, 8, 1)

  cv.cvtColor.async(img_orig, img_gray, cv.BGR2GRAY, function(err) {
    cv.canny.async(img_gray, img_edges, 5, 300, 3, function(err) {

      outputAndRelease('data/orig.jpg', img_orig, function() {
        outputAndRelease('data/gray.jpg', img_gray, function() {
          outputAndRelease('data/edges.jpg', img_edges, function() {
            console.log('done');
          });
        });
     });

    })
  })
})
