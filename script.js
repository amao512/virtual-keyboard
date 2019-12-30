document.addEventListener('DOMContentLoaded', () => {
  let keyboard = document.querySelector('.keyboard');
  let keys = document.querySelectorAll('.key');
  let inp = document.querySelector('.inp');

  inp.addEventListener('keydown', event => {
    keys.forEach(btn => {
      if(event.code == btn.dataset.symbol){
        btn.style.background = '#d3d3d3';
        btn.style.color = '#000';
      }
    })
  })

  inp.addEventListener('keyup', event => {
    keys.forEach(btn => {
      if(event.code == btn.dataset.symbol){
        btn.style.background = '#232424';
        btn.style.color = '#fff';
      }
    })
  })

  keys.forEach(btn => {
    btn.addEventListener('click', () => {
      switch(btn.dataset.symbol){
        case 'Backspace':
          inp.value = inp.value.slice(0, -1);
          break;
        case 'Tab':
          inp.value += '   ';
          break;
        case 'CapsLock':
          inp.value += btn.value.toLowerCase();
          break;
        case 'Enter':
          if(inp.value == ''){
            inp.style.border = '1px solid red';
          } else {
            inp.style.border = '1px solid #000'
            inp.value = '';
          }
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          inp.value += '';
          break;
        case 'Space':
          inp.value += ' ';
          break;
        default:
          inp.value += btn.textContent;
          break;
      }

    })
  })
})
