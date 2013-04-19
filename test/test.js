
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

start('program')
start('open camera')
cv.captureFromCAM(-1, function(err, camera) {
  end('open camera')

  start('query frame')
  cv.queryFrame(camera, function(err, image) {
    end('query frame')

    start('save image')
    cv.saveImage('out.jpg', image, function(err, result) {
      end('save image', 'save image - result: ' + result)
      end('program')
    })
  })
})
