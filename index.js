var ffi = require('ffi');
var ref = require('ref');
var Struct = require('ref-struct');

// ---- Types ----
var VoidPtr = ref.refType(ref.types.void);
var CvCapturePtr = VoidPtr;
var CvArrPtr = VoidPtr;

var CvSize = Struct({
  width: 'int',
  height: 'int'
});

var IplImage = Struct({

});
var IplImagePtr = ref.refType(IplImage);
var IplImagePtrPtr = ref.refType(IplImagePtr);


// ---- Functions ----
var core = ffi.Library('libopencv_core', {
  'cvGetSize': [ CvSize, [ CvArrPtr ] ],
  'cvCreateImage': [ IplImagePtr, [ CvSize, 'int', 'int' ] ],
  'cvReleaseImage': [ 'void', [ IplImagePtrPtr ] ],
});

var imgproc = ffi.Library('libopencv_imgproc', {
  'cvCvtColor': [ 'void', [ CvArrPtr, CvArrPtr, 'int' ] ],
});

var highgui = ffi.Library('libopencv_highgui', {
  'cvCreateCameraCapture': [ CvCapturePtr, [ 'int' ] ],
  'cvQueryFrame': [ IplImagePtr, [ CvCapturePtr ] ],
  'cvGrabFrame': [ 'bool', [ CvCapturePtr ] ],
  'cvRetrieveFrame': [ IplImagePtr, [ CvCapturePtr ] ],
  'cvSaveImage': [ 'int', [ 'string', IplImagePtr ] ],
});


// ---- API ----
var cv = {};

cv.getSize = core.cvGetSize;
cv.createImage = core.cvCreateImage;
cv.releaseImage = core.cvReleaseImage;

cv.cvtColor = imgproc.cvCvtColor;

cv.captureFromCAM = highgui.cvCreateCameraCapture;
cv.queryFrame = highgui.cvQueryFrame;
cv.grabFrame = highgui.cvGrabFrame;
cv.retrieveFrame = highgui.cvRetrieveFrame;
cv.saveImage = highgui.cvSaveImage;


// ---- Enums ----
cv.BGR2GRAY    = 6;
cv.RGB2GRAY    = 7;
cv.GRAY2BGR    = 8;
cv.GRAY2RGB    = cv.GRAY2BGR;


module.exports = cv;
