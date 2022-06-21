var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var spancolor = document.getElementById('currentNumber');

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}  


function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


const adiciona = document.getElementById('adicionar');
adiciona.addEventListener("click", increment);

const subtrai = document.getElementById('subtrair');
subtrai.addEventListener("click", decrement);

if(currentNumberWrapper <= 0){
    spancolor.style.color = 'red';
}
