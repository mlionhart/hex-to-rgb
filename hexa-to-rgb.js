let btn = document.querySelector('input[type=button]');
let field = document.getElementById('hexa');
let form = document.querySelector('form');
let output = document.getElementById('output');
let rgb = '';
let copybtn = document.querySelector('button');
let success = document.getElementById('success');

// const copyText = (elem) => {
//   selection = window.getSelection();
//   range = document.createRange();
//   range.selectNodeContents(elem);
//   selection.removeAllRanges();
//   selection.addRange(range);
//   navigator.clipboard.writeText(elem.innerHTML);
// }

copybtn.addEventListener('click', (event) => {
  event.preventDefault();
  selection = window.getSelection();
  range = document.createRange();
  range.selectNodeContents(output);
  selection.removeAllRanges();
  selection.addRange(range);
  navigator.clipboard.writeText(output.innerText);
  document.getElementById('success').style.display = 'inline-block';
});

field.addEventListener('click', (event) => {
  output.innerHTML = '';
  success.style.display = 'none';
  copybtn.style.display = 'none';
})

// automatically convert input to uppercase
field.addEventListener('input', (event) => {
  field.value = field.value.toUpperCase();
  // success.style.display = 'none';
  // copybtn.style.display = 'none';
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  rgb = '';
  let inp = document.querySelector('input').value;
  if ((inp.length !== 6) && (inp.length !==3)) {
    field.value = '';
    field.style.outline = "2px solid rgba(255, 0, 0, 0.5)";
    output.style.color = 'red';
    output.innerHTML = "Invalid Hexa number";
    er = true;
    return;
  } else if (inp.length === 3) {
    newInp = inp[0] + inp[0];
    newInp += inp[1] + inp[1];
    newInp += inp[2] + inp[2];
    inp = newInp;
  } 
  
  field.style.outline = '';
  output.style.color = '#01f';
  rgb += hexaToDecimal(inp.slice(0, 2)) + ', ';
  rgb += hexaToDecimal(inp.slice(2, 4)) + ', ';
  rgb += hexaToDecimal(inp.slice(4));
  output.innerHTML = 'rgb(' + rgb + ')';
  copybtn.style.display = 'inline-block';
})
const hexaObj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}

const hexaToDecimal = (inp) => {
  let result = (hexaObj[inp[0]] * 16) + hexaObj[inp[1]];
  return result;
}