
var cv = require('cv');

// start up camera and open some windows
// note: can't run captureFromCAM and queryFrame as async on mac, due to event loop
var camera = cv.captureFromCAM(-1);
var win_resized = cv.namedWindow('resized', 0);
var win_gray = cv.namedWindow('gray', 0);
var win_edges = cv.namedWindow('edges', 0);

cv.moveWindow('resized', 100, 100);
cv.moveWindow('gray', 450, 100);
cv.moveWindow('edges', 800, 100);

// create some intermediate images
var size = cv.size(320, 180);
var img_resized = cv.createImage(size, 8, 3);
var img_gray = cv.createImage(size, 8, 1);
var img_edges = cv.createImage(size, 8, 1);


function loop() {
  // grab a frame (sync, unfortunately)
  var img_camera = cv.queryFrame(camera);

  // resize original
  cv.resize.async(img_camera, img_resized, cv.INTER_LINEAR, function(err) {

    // convert to grayscale, and then run the canny algorithm to find edges
    cv.cvtColor.async(img_resized, img_gray, cv.BGR2GRAY, function(err) {
      cv.canny.async(img_gray, img_edges, 5, 300, 3, function(err) {

        // display the images
        cv.showImage.async('resized', img_resized, function(err) {
          cv.showImage.async('gray', img_gray, function(err) {
            cv.showImage.async('edges', img_edges, function(err) {

              // continuously loop
              setTimeout(loop, 10);
            });
          });
        });
      });
    });
  });
}

loop();
