import firstDrawPixel from "./pixel/firstDrawPixel.js";
import drawPixel from "./pixel/drawPixel.js";
import onClickColor from "./events/onClickColor.js";
import onClickPixel from "./events/onClickPixel.js";

const canvasEl = document.querySelector("canvas");
const ctx = canvasEl.getContext("2d");

let selectedColor = null;
let pixelSizeFront = null;

const socket = io();

socket.on(
  "join-pixel-data",
  ({ colorPixel, timers, pixelSize, canvasWidth, canvasHeight }) => {
    pixelSizeFront = pixelSize;
    firstDrawPixel({
      canvasEl,
      ctx,
      colorPixel,
      timers,
      pixelSize,
      canvasWidth,
      canvasHeight,
    });
    onClickPixel({
      canvasEl,
      pixelSize,
      callback: ({ rowIndex, colIndex }) => {
        socket.emit("update-pixel-data", {
          color: selectedColor,
          rowIndex,
          colIndex,
        });
      },
    });
  }
);

socket.on("update-pixel-data", ({colorPixel, timers}) => {
  //console.table("pixelData", pixelData);
  drawPixel({
    ctx,
    colorPixel,
    timers,
    pixelSize : pixelSizeFront,
    canvasWidth: canvasEl.width,
    canvasHeight: canvasEl.height,
  });
});


onClickColor({
  callback: (color) => {
    selectedColor = color;
  },
});