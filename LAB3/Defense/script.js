let count = 0;

const value = document.getElementById("counter-value")


const decreaseBtn =  document.getElementById("decrease-button");
const restBtn = document.getElementById("rest-button");
const increaseBtn = document.getElementById("increase-button");


function updateDisplay() {
    value.textContent = count;  
    if (count>0){
        value.className = "positive"
    }
    else if (count < 0) {
        value.className = "negative"
    }
    else {
        value.className = "zero"
    }
}


decreaseBtn.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});
increaseBtn.addEventListener("click", ()=>{
    count++;
    updateDisplay();
})
restBtn.addEventListener("click", ()=>{
    count = 0;
    updateDisplay();
})




