# cv
## OpenCV for Node.js

This module wraps the [OpenCV 1.x API](http://docs.opencv.org/modules/refman.html) for Node.js, using [node-ffi](http://github.com/rbranson/node-ffi) and [ref](http://github.com/TooTallNate/ref).

It provides a nice, Javascript friendly API over OpenCV, without actually using any native C/C++ whatsoever.

## Example usage

    var cv = require('cv');
    cv.loadImage.async('data/input.jpg', cv.LOAD_IMAGE_UNCHANGED, function (err, img) {
      
    });

## Synchronous usage

    var cv = require('cv');  
    var img = cv.loadImage('data/input.jpg', cv.LOAD_IMAGE_UNCHANGED);

## API

[Opencv API methods](http://docs.opencv.org/modules/refman.html) are available directly via the cv module - e.g. cvCreateImage is exposed as cv.createImage by convention. Enums are also exposed directly - e.g. cv.BGR2BGRA. Refer to [blob/master/index.js](index.js) for the current list of bindings.

## License

(The MIT License)

Copyright (c) 2013 Carter Thaxton &lt;carter.thaxton@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
