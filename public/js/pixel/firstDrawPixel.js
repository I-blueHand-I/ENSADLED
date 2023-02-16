import drawPixel from "./drawPixel.js";

const firstDrawPixel = ({
  canvasEl,
  ctx,
  colorPixel,
  timers,
  pixelSize,
  canvasWidth,
  canvasHeight,
}) => {
  canvasEl.width = canvasWidth;
  canvasEl.height = canvasHeight;

  const rowMax = canvasHeight / pixelSize;
  const colMax = canvasWidth / pixelSize;

  /*let colorPixel = [];
  for (let i = 0; i < rowMax; i++) {
      colorPixel[i] = [];
      for (let j = 0; j < colMax; j++) {
          colorPixel[i][j] = null;
      }
  }

  let timers = [];
  for (let i = 0; i < rowMax; i++) {
      timers[i] = [];
      for (let j = 0; j < colMax; j++) {
          timers[i][j] = null;
      }
  }*/

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  //draw grid//
  for (let i = 0; i < 21 ;i++){
    ctx.fillStyle = "black";
    ctx.fillRect(i*pixelSize,0,0.3,canvasHeight);
    ctx.fillRect(0,i*pixelSize,canvasWidth,0.3);
  }
  
  drawPixel({
    ctx,
    colorPixel,
    timers,
    pixelSize,
    canvasWidth,
    canvasHeight,
  });
};

export default firstDrawPixel;
