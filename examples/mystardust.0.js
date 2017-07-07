var canvas = document.getElementById("main");
var width = 960;
var height = 500;
var platform = Stardust.platform("webgl-2d", canvas, width, height);

var polyline = Stardust.mark.polyline();
var mark = Stardust.mark.create(polyline, platform)
var instance = DATA.map(function(d) {
  return {
    C0: +d.C0,
    C1: +d.C1,
    C2: +d.C2,
    C3: +d.C3,
    C4: +d.C4,
    C5: +d.C5,
    assigned: parseInt(d.Assigned.substr(1))
  };
});

var colors = [ [31, 119, 180], 
               [255, 127, 14],
               [44, 160, 44],
               [214, 39, 40],
               [148, 103, 189]
             ];
colors = colors.map((x) => [ x[0]/255, x[1]/255, x[2]/255, 0.5]);

var yScale = Stardust.scale.linear().domain([0, 1]).range([500, 100]);
var xScale = Stardust.scale.linear().domain([0, 5]).range([100, 700]);

mark.attr("p", Starudst.scale.Vector2(
  xScale(d => d[0]),
  yScale(d => d[1])
));
mark.attr("width", 1);
mark.attr("color", [0, 0, 0, 1]);

let indices = [ 0, 1, 2, 3, 4, 5 ];
let convertInstance = (inst) => indices.map(i => [i, inst["C" + i]]);

mark.instance((d) => {
  return {
    data: convertInstance(d),
    attrs: {
      color: colors[d.assigned]
    }
  }
});

mark.data(instance.slice(0, 300));
addSlider("Width", mark, "width", 1, 0, 2);

function render() {
  mark.render();
}

