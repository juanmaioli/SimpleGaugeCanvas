function gaugeDraw(id,data) {

  let color1 = "#000";
  let color2 = "#000";
  const X = 100;
  const Y = 80;
  const outterRadius = 65;
  const innerRadius = 55;
  const c = document.getElementById(id);
  const context = c.getContext("2d");
  
  // Clear rect using actual canvas dimensions
  context.clearRect(0, 0, c.width, c.height);
  
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

  const dataScale = ((50 + data) * 0.008)+1.1;

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