
function gaugeDraw(id,data) {

  var color1 = "#000";
  var color2 = "#000";
  var X = 100;
  var Y = 80;
  var outterRadius = 65;
  var innerRadius = 55;
  var c = document.getElementById(id);
  var context = c.getContext("2d");
  context.clearRect(0, 0, 400, 240);
  context.fillStyle = "#bbb";
  context.font = "28px sans";
  context.textAlign = "center";
  context.fillText(data + " " + String.fromCharCode(176) + "C",100,90);
  context.font = "10px sans";
  context.fillText("-50" + String.fromCharCode(176) + "C",45,130);
  context.fillText("50" + String.fromCharCode(176) + "C",150,130);

  if ( -50 < data && data <= 8) {color1 = "#007BFF"; color2 = "#007BFF";}
  if ( 8 <= data && data <= 27) {color1 = "#28A745"; color2 = "#28A745";}
  if ( 27 <= data && data <= 30) {color1 = "#FFC107"; color2 = "#FFC107";}
  if ( 30 <= data && data <= 50) {color1 = "#DC3545"; color2 = "#DC3545";}

  var dataScale = ((50 + data) * 0.008)+1.1;

  //Grey Background
  setRadialGradient("#EEE", "#EEE");
  drawDonut(Math.PI * dataScale, Math.PI * 2.15);

  //Measure
  setRadialGradient(color1, color2);
  drawDonut(Math.PI * 0.85, Math.PI * dataScale);

  function drawDonut(sRadian, eRadian){
      context.beginPath();
      context.strokeStyle = context.fillStyle;
      context.lineWidth = outterRadius - innerRadius;
      context.lineCap = "round";
      context.arc(X, Y, (outterRadius + innerRadius) / 2, sRadian, eRadian, false);
      context.stroke();
  }

  function setRadialGradient(sgc, bgc){
      var grd = context.createRadialGradient(X, Y, innerRadius, X, Y, outterRadius);
      grd.addColorStop(0,sgc);
      grd.addColorStop(1,bgc);
      context.fillStyle = grd;
  }
}
