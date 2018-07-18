var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;



//space background
var bgLingrad = ctx.createLinearGradient(0, 0, 600, 600);
bgLingrad.addColorStop(0.0, 'rgba(13, 30, 64, 0.9)');
bgLingrad.addColorStop(0.2, 'rgba(102, 0, 56, 0.7)');
bgLingrad.addColorStop(0.4, 'rgba(85, 0, 128, 0.7)');
bgLingrad.addColorStop(0.7, 'rgba(0, 42, 128, 0.7)');
bgLingrad.addColorStop(1.0, 'rgba(13, 30, 64, 0.9)');
var bgVignetting = ctx.createRadialGradient(300, 300, 190, 300, 350, 450);
bgVignetting.addColorStop(0.0, 'rgba( 0, 0, 0, 0)');
bgVignetting.addColorStop(0.5, 'rgba( 0, 0, 0, 0.5)');
bgVignetting.addColorStop(1.0, 'rgba( 0, 0, 0, 1)');
var bgVignetting2 = ctx.createRadialGradient(300, 500, 150, 300, 500, 500);
bgVignetting2.addColorStop(1.0, 'rgba( 7, 15, 33, 0)');
bgVignetting2.addColorStop(0.5, 'rgba( 7, 15, 33, 0.2)');
bgVignetting2.addColorStop(0.0, 'rgba( 7, 15, 33, 0.5)');
var bgVignetting3 = ctx.createRadialGradient(300, 450, 150, 300, 450, 300);
bgVignetting3.addColorStop(1.0, 'rgba( 255, 255, 255, 0)');
bgVignetting3.addColorStop(0.5, 'rgba( 255, 255, 255, 0.1)');
bgVignetting3.addColorStop(0.0, 'rgba( 255, 255, 255, 0.2)');

ctx.fillStyle = bgLingrad;
ctx.fillRect(0, 0, 600, 400);
ctx.fillStyle = bgVignetting;
ctx.fillRect(0, 0, 600, 600);
ctx.fillStyle = bgVignetting3;
ctx.fillRect(0, 0, 600, 600);


// draw stars
for (var j=1; j<50; j++) {
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6';
  //ctx.translate( 600-Math.floor(Math.random() * 600),
  //               400-Math.floor(Math.random() * 400));
  ctx.translate( (Math.random() * 600),
                (Math.random() * 400));
  drawStar(ctx,Math.floor(Math.random()*3)+2);
  ctx.restore();
}
function drawStar(ctx,r) {
  ctx.save();
  ctx.beginPath()
  ctx.moveTo(r,0);
  for (var i=0;i<9;i++) {
    ctx.rotate(Math.PI/5);
    if(i%2 == 0) {
      ctx.lineTo((r/0.525731)*0.200811,0);
    } else {
      ctx.lineTo(r,0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}




//mountain background  https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
//far
/*
var farBg = new Image();
farBg.onload = function(){
  ctx.drawImage(farBg,0,0);
};
farBg.src = 'images/far-bg.svg';


//mid
var midBg = new Image();
midBg.onload = function(){
  ctx.drawImage(midBg,0,0);
};
midBg.src = 'images/mid-bg.svg';






//land
ctx.fillStyle = '#E77458';
ctx.fillRect(0, 380, 600, 20);
*/







//------ grid  ----- >> delete after finish
ctx.beginPath();
for (var i=0; i<13; i++) {
  let pos = i*50;
  ctx.moveTo(pos,0);
  ctx.lineTo(pos,400);
  ctx.fillText(pos, pos, 10);

  ctx.moveTo(0, pos);
  ctx.lineTo(600,pos);
  ctx.fillText(pos, 0, pos);
}
ctx.strokeStyle = 'rgba(255,255,255,0.1)';
ctx.stroke();
