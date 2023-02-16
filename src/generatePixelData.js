/**
 * [
 *      ['red', null],
 *      [null, null],
 * ]
 *
 */

const generatePixelData = ({
  pixelSize = 40,
  width = pixelSize*21,
  height = pixelSize*21,
} = {}) => {
  const colMax = width / pixelSize;
  const rowMax = height / pixelSize;

  const pixelColor = [];
  const timers = [];

  for (let rowIndex = 0; rowIndex < rowMax; rowIndex++) {
    const row = [];
    const rowTimers = [];
    for (let colIndex = 0; colIndex < colMax; colIndex++) {
      row.push(null);
      rowTimers.push(null);
    }
    pixelColor.push(row);
    timers.push(rowTimers);
  }

  return { pixelColor, timers };
};

export default generatePixelData;
