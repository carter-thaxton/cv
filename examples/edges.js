
var cv = require('cv');

// start up camera and open some windows
// note: can't run captureFromCAM and queryFrame as async on mac, due to event loop
var camera = cv.captureFromCAM(-1);
var win_orig = cv.namedWindow('original', 0);
var win_gray = cv.namedWindow('gray', 0);
var win_edges = cv.namedWindow('edges', 0);

cv.moveWindow('original', 100, 300);
cv.moveWindow('gray', 200, 200);
cv.moveWindow('edges', 300, 100);

function loop() {
  // grab a frame (sync, unfortunately)
  var img_orig = cv.queryFrame(camera);

  // create some intermediate images
  var size = cv.getSize(img_orig);
  var img_gray = cv.createImage(size, 8, 1);
  var img_edges = cv.createImage(size, 8, 1);

  // convert to grayscale, and then run the canny algorithm to find edges
  cv.cvtColor.async(img_orig, img_gray, cv.BGR2GRAY, function(err) {
    cv.canny.async(img_gray, img_edges, 5, 300, 3, function(err) {

      // display the images
      cv.showImage.async('original', img_orig, function(err) {
        cv.showImage.async('gray', img_gray, function(err) {
          cv.showImage.async('edges', img_edges, function(err) {

            // don't forget to release the images we created
            // note: do not modify or release the image that queryFrame provides
            cv.releaseImage(img_gray.ref());
            cv.releaseImage(img_edges.ref());

            // continuously loop
            setTimeout(loop, 10);
          });
        });
      });
    });
  });
}

loop();
