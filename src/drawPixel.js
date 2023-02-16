const drawPixel = ({
  colorPixel,
  timers,
  color,
  rowIndex,
  colIndex,
}) => { 
  const currentTime = new Date().getTime();
  if (currentTime - timers[rowIndex][colIndex] > 10000) {
    timers[rowIndex][colIndex] = currentTime;
    colorPixel[rowIndex][colIndex] = color;   
  }
};

export default drawPixel;