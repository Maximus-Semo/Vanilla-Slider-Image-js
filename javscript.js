const buttonNext = document.getElementById("button");
const containe = document.querySelector(".divPar");
const numberSlider = document.querySelector(".numberSlider");
const buttonprev = document.getElementById("buttonprev");
const arrImg = [
  "https://www.w3schools.com/howto/img_nature_wide.jpg",
  "https://www.w3schools.com/howto/img_snow_wide.jpg",
  "https://www.w3schools.com/howto/img_lights_wide.jpg",
  "https://www.w3schools.com/howto/img_mountains_wide.jpg"
]

let i = 1;

buttonprev.addEventListener("click",(eo)=> {
  const continer = 
  `<div class="divPar">
  <div class="numberSlider">${i + 1} / ${arrImg.length}</div>
  <img src="${arrImg[i]}" alt="firtemg">
  </div>`
    containe.innerHTML = continer

if(i >= arrImg.length - 1){
  i = 0
} else {
  i++
}

});
let curen = 0

buttonNext.addEventListener("click",(eo)=> {
 
  if(curen <= 0){
    curen = arrImg.length - 1
  }else{
    curen--
  }

  const continer = 
  `<div class="divPar">
  <div class="numberSlider">${curen + 1} / ${arrImg.length}</div>
  <img src="${arrImg[curen]}" alt="firtemg">
  </div>`
  containe.innerHTML = continer

});

const dot = document.querySelectorAll(".dot")
let iee = 0
dot.forEach(item => {
    item.addEventListener("click",(eo)=> {
      i = Number(item.innerText) - 1
      const continer = 
      `<div class="divPar">
      <div class="numberSlider">${i + 1} / ${arrImg.length}</div>
      <img src="${arrImg[i]}" alt="firtemg">
      </div>`
        containe.innerHTML = continer
    
    })
});