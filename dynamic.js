const dropDown = document.querySelector("input");
const dynamicDivs = document.querySelector(".dynamic-divs");

dropDown.onchange = function() {
  

    const selectedValue = this.value;

    for(let i = 1; i <= selectedValue; i++){
        dynamicDivs.innerHTML += `<div>Number ${i}</div>`;
    }
};

dropDown.addEventListener("change", dropDown);




const reset = document.querySelector(".reset");

reset.onclick = function () {
    dynamicDivs.remove();
}

reset.addEventListener("click", reset);