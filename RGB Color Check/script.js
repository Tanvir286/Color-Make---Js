
  function Color() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r},${g},${b} )`
    return rgb;
  }
  
  let  area = document.querySelector('#content-area');
  let button = document.querySelector('button');

button.addEventListener('click',function() {
    area.style.backgroundColor = Color();
});