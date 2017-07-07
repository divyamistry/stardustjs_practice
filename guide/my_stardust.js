var canvas  = document.getElementById("main");
var width = 960;
var height = 500;

var platform = Stardust.platform("webgl-2d", canvas, width, height);

// some sample data items
var data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// create a mark specification
var circleSpec = Stardust.mark.circle();
// create a mark object using the spec on our WebGL platform
var circles = Stardust.mark.create(circleSpec, platform);
// bind data attributes to the circles
circles.attr("center", (d) => [ d * 80, 250 ]);
circles.attr("radius", (d) => d * 3);
circles.attr("color", (d) => [ 0, 0, 0, 1 ]);
// bind data items to circles
circles.data(data);
//finally, render the cricles
circles.render();

