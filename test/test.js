
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

// can't run this async on mac, due to event loop
var camera = cv.captureFromCAM(-1);

start('processing');

cv.queryFrame.async(camera, function(err, image) {

  var size = cv.getSize(image);

  start('create image')
  cv.createImage.async(size, 8, 1, function(err, image_gray) {
    end('create image')

    start('convert grayscale')
    cv.cvtColor.async(image, image_gray, cv.BGR2GRAY, function(err) {
      end('convert grayscale')

      cv.saveImage.async('out/orig.jpg', image, function(err, result) {
        cv.releaseImage(image.ref())
        cv.saveImage.async('out/gray.jpg', image_gray, function(err, result) {
          cv.releaseImage(image_gray.ref())

          end('processing');
        })
      })
    })
    endSync('convert grayscale')
  })
  endSync('create image')
})
