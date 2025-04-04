
function delayedExecution(callback, delay, ...args) {
    setTimeout(() => {
        callback(...args);
    }, delay);
}


function printMessage(message) {
    console.log(message);
}
delayedExecution(printMessage, 1000, "This is a delayed message.");



function addNumbers(a, b) {
    console.log(a + b);
}
delayedExecution(addNumbers, 3000, 5, 10);



function logCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    console.log(`Current time: ${hours}:${minutes}`);
}
delayedExecution(logCurrentTime, 5000);

