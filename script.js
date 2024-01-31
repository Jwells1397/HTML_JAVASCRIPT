let counterValue = 0;

function updateCounter() {
    document.getElementById("counter").innerText = counterValue;
}

function incrementCounter() {
    counterValue++;
    updateCounter();
}

function decrementCounter() {
    counterValue--;
    updateCounter();
}
