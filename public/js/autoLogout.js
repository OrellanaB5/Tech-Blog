let timeout;
const idleTimeout = 300000; 
const warningTimeout = 20000; 
let warningTimeoutId;

function showWarning() {
    alert('You will be logged out due to inactivity in 20 seconds. Move your mouse or touch the screen to stay logged in.');
    warningTimeoutId = setTimeout(() => {
        document.location.replace('/api/users/logout'); 
    }, warningTimeout);
}

function startTimer() {
    clearTimeout(timeout); 
    clearTimeout(warningTimeoutId); 
    timeout = setTimeout(showWarning, idleTimeout - warningTimeout); 
}

function resetTimer() {
    clearTimeout(timeout);
    clearTimeout(warningTimeoutId); 
    startTimer();
}

document.addEventListener('mousemove', resetTimer, false);
document.addEventListener('mousedown', resetTimer, false);
document.addEventListener('keypress', resetTimer, false);
document.addEventListener('touchmove', resetTimer, false);

startTimer();

