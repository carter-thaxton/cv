var ffi = require('ffi');
var ref = require('ref');

var libopencv_core = ffi.Library('libopencv_core', {
});

// var librunloop = ffi.Library('./librunloop', {
//   'runLoop': [ 'int', [] ],
//   'runLoopForever': [ 'void', [] ],
// });

var libopencv_highgui = ffi.Library('libopencv_highgui', {
  'cvCreateCameraCapture': [ 'pointer', [ 'int' ] ],
  'cvQueryFrame': [ 'pointer', [ 'pointer' ] ],
  'cvGrabFrame': [ 'bool', [ 'pointer' ] ],
  'cvRetrieveFrame': [ 'pointer', [ 'pointer' ] ],
  'cvSaveImage': [ 'int', [ 'string', 'pointer' ] ],
});

var cv = {};

cv.captureFromCAM = function(index, cb) {
  // cannot run async on mac, unfortunately
  var result = libopencv_highgui.cvCreateCameraCapture(index);
  if (cb) cb(null, result);
};

cv.queryFrame = libopencv_highgui.cvQueryFrame.async;
cv.grabFrame = libopencv_highgui.cvGrabFrame.async;
cv.retrieveFrame = libopencv_highgui.cvRetrieveFrame.async;
cv.saveImage = libopencv_highgui.cvSaveImage.async;

module.exports = cv;
