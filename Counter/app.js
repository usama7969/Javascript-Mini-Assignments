



let counter = 0;
let texxt = document.getElementById('counterr');
let message = document.getElementById('redmessageshow');
message.style.display = 'none';  






const colorss = [
    '#3357FF', '#0C065A', '#FF5733', '#33FF57', '#F0F5F8', '#F0E68C', 
    '#FF33A8', '#33FFD8', '#A033FF', '#FF8333', '#33FF8C'
];

function changeColors() {
    let randommColor = colorss[Math.floor(Math.random() * colorss.length)];
    document.body.style.backgroundColor = randommColor;
}


function showRedTexxt(){
 if (counter === 0) {
        message.style.display = 'block';
    } 
    else{
        message.style.display = 'none'; 
    }

    
}

function incrementCounter() {
    counter++;
    texxt.textContent = counter;
    showRedTexxt()
    changeColors()
    
}

function decrementCounter() {
    if (counter > 0) {
        counter--;
        texxt.textContent = counter;
        showRedTexxt()
        changeColors()
    }
    else{
        document.body.style.backgroundColor = "white";
    }
     

}

function resetCounter() {
    counter = 0;
    texxt.textContent = counter;
    showRedTexxt()
    document.body.style.backgroundColor = "white";
}