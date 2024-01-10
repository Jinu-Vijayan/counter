let showVal = document.querySelector("#show-val");
let btnContainer = document.querySelector("#btn-container");
let count = 0;
btnContainer.addEventListener("click",(e) => {
    if(e.target.id == "increase"){
        count++;
        showVal.style.color = "green";
    } else if ( e.target.id == "reset"){
        count = 0;
    } else if (e.target.id == "decrease"){
        count--;
        showVal.style.color = "red";
    }
    if(count == 0){
        showVal.style.color = "black";
    }
    showVal.innerText = count;
})