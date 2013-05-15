var ffi = require('ffi');
var ref = require('ref');
var Struct = require('ref-struct');


// ---- Types ----
function ptr(type) {
  return ref.refType(type);
}

var Void = ref.types.void;
var VoidPtr = ptr(Void);

var CvSize = Struct({
  width: 'int',
  height: 'int'
});

var CvPoint = Struct({
  x: 'int',
  y: 'int'
});

var IplImage = Void;
var IplImagePtr = ptr(IplImage);
var IplImagePtrPtr = ptr(IplImagePtr);

var Mat = Void;
var MatPtr = ptr(Mat);
var MatPtrPtr = ptr(MatPtr);

var CvCapture = Void;
var CvCapturePtr = ptr(CvCapture);
var CvCapturePtrPtr = ptr(CvCapturePtr);

var VideoWriter = Void;
var VideoWriterPtr = ptr(VideoWriter);
var VideoWriterPtrPtr = ptr(VideoWriterPtr);

var CvArr = Void;
var CvArrPtr = ptr(CvArr);


// ---- Functions ----
var core = ffi.Library('libopencv_core', {
  'cvGetSize': [ CvSize, [ CvArrPtr ] ],
  'cvCreateImage': [ IplImagePtr, [ CvSize, 'int', 'int' ] ],
  'cvReleaseImage': [ 'void', [ IplImagePtrPtr ] ],
  'cvCreateMat': [ MatPtr, [ 'int', 'int', 'int' ] ],
  'cvReleaseMat': [ 'void', [ MatPtrPtr ] ],
});

var imgproc = ffi.Library('libopencv_imgproc', {
  'cvCvtColor': [ 'void', [ CvArrPtr, CvArrPtr, 'int' ] ],
  'cvPyrDown': [ 'void', [ CvArrPtr, CvArrPtr, 'int' ] ],
  'cvCanny': [ 'void', [ CvArrPtr, CvArrPtr, 'double', 'double', 'int' ] ],
  'cvResize': [ 'void', [ CvArrPtr, CvArrPtr, 'int' ] ],
});

var highgui = ffi.Library('libopencv_highgui', {
  'cvCreateCameraCapture': [ CvCapturePtr, [ 'int' ] ],
  'cvCreateFileCapture': [ CvCapturePtr, [ 'string' ] ],
  'cvReleaseCapture': [ 'void', [ CvCapturePtrPtr ] ],
  'cvQueryFrame': [ IplImagePtr, [ CvCapturePtr ] ],
  'cvGrabFrame': [ 'bool', [ CvCapturePtr ] ],
  'cvRetrieveFrame': [ IplImagePtr, [ CvCapturePtr ] ],
  'cvLoadImage': [ IplImagePtr, [ 'string', 'int' ] ],
  'cvSaveImage': [ 'int', [ 'string', IplImagePtr, 'int' ] ],
  'cvCreateVideoWriter': [ VideoWriterPtr, [ 'string', 'int', 'double', CvSize, 'int' ] ],
  'cvReleaseVideoWriter': [ 'void', [ VideoWriterPtrPtr ] ],
  'cvWriteFrame': [ 'int', [ VideoWriterPtr, IplImagePtr ] ],
  'cvNamedWindow': [ 'int', [ 'string', 'int' ] ],
  'cvDestroyWindow': [ 'void', [ 'string' ] ],
  'cvDestroyAllWindows': [ 'void', [ ] ],
  'cvShowImage': [ 'void', [ 'string', CvArrPtr ] ],
  'cvResizeWindow': [ 'void', [ 'string', 'int', 'int' ] ],
  'cvMoveWindow': [ 'void', [ 'string', 'int', 'int' ] ],
});


// ---- API ----
var cv = require('./cv_consts');

cv.getSize = core.cvGetSize;
cv.createImage = core.cvCreateImage;
cv.releaseImage = core.cvReleaseImage;
cv.createMat = core.cvCreateMat;
cv.releaseMat = core.cvReleaseMat;

cv.cvtColor = imgproc.cvCvtColor;
cv.pyrDown  = imgproc.cvPyrDown;
cv.canny = imgproc.cvCanny;
cv.resize = imgproc.cvResize;

cv.captureFromCAM = highgui.cvCreateCameraCapture;
cv.captureFromFile = highgui.cvCreateFileCapture;
cv.releaseCapture = highgui.cvReleaseCapture;
cv.queryFrame = highgui.cvQueryFrame;
cv.grabFrame = highgui.cvGrabFrame;
cv.retrieveFrame = highgui.cvRetrieveFrame;
cv.loadImage = highgui.cvLoadImage;
cv.saveImage = highgui.cvSaveImage;
cv.createVideoWriter = highgui.cvCreateVideoWriter;
cv.releaseVideoWriter = highgui.cvReleaseVideoWriter;
cv.writeFrame = highgui.cvWriteFrame;
cv.namedWindow = highgui.cvNamedWindow;
cv.destroyWindow = highgui.cvDestroyWindow;
cv.destroyAllWindows = highgui.cvDestroyAllWindows;
cv.showImage = highgui.cvShowImage;
cv.resizeWindow = highgui.cvResizeWindow;
cv.moveWindow = highgui.cvMoveWindow;

// ---- Macros implemented as util functions ----
cv.size = function(width, height) {
  return new CvSize({ width: width, height: height });
};

cv.FOURCC = function(fourcc) {
  return (fourcc.charCodeAt(0) & 255) | ((fourcc.charCodeAt(1) & 255) << 8) | ((fourcc.charCodeAt(2) & 255) << 16) | ((fourcc.charCodeAt(3) & 255) << 24);
};


module.exports = cv;
