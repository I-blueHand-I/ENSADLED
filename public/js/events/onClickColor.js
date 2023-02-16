
//color picker//
const onClickColor = ({callback}) => {
  let hexInput = document.querySelector('#hex');
  let colorInput = document.querySelector('#color'); 
  colorInput.addEventListener('input', () => {   
      const color = colorInput.value;
      hexInput.value = color;
      if (typeof callback === 'function') {
          callback(color);
      }
  });
};

export default onClickColor;



