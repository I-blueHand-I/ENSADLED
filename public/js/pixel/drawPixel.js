const drawPixel = ({
  ctx,
  colorPixel,
  timers,
  pixelSize,
  canvasWidth,
  canvasHeight,
}) => {
  const colMax = canvasWidth / pixelSize;
  const rowMax = canvasHeight / pixelSize;

  for (let rowIndex = 0; rowIndex < rowMax; rowIndex++) {
    for (let colIndex = 0; colIndex < colMax; colIndex++) {  
      //if ( colIndex >= 0 && colIndex < colorPixel.length && rowIndex >= 0 && rowIndex < colorPixel.length){
        if (colorPixel[rowIndex][colIndex] !== null) {
            ctx.fillStyle = colorPixel[rowIndex][colIndex];
            ctx.fillRect(
            colIndex * pixelSize,
            rowIndex * pixelSize,
            pixelSize,
            pixelSize   
          );
            timers[rowIndex][colIndex] = new Date().getTime();
            console.table(colorPixel);
            console.table(timers);
        }
      //}
     }
  }
};

export default drawPixel;



