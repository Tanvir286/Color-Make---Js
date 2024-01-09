
let hex1 = document.querySelector('#hex1');
let hex2 = document.querySelector('#hex2');
let generate = document.querySelector('#generate');
let copy = document.querySelector('#copy');

let hexNumbers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
 


generate.addEventListener("click", () => {
  generateRandomHex();
})

copy.addEventListener("click", () => {
  copyHex();
})



 let generateRandomHex = () => {

  hex1 = "", hex2 = ""
  for(let i = 0; i < 6; i++){
    hex1 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
    hex2 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
  } 
   document.querySelector("#hex1").innerHTML = hex1;
   document.querySelector("#hex2").innerHTML = hex2;
   document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`
}


let copyHex = () => {
  let gradient = `background: linear-gradient(45deg, #${hex1}, #${hex2});`
  navigator.clipboard.writeText(gradient)
}
