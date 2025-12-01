window.onscroll = function () {
    const submenu = document.querySelector(".submenu");
    const header = document.querySelector("header");

    if (window.pageYOffset > 300) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    if (window.pageYOffset > 200) {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
};
function updateTimer() {
    const now = new Date();

    const currentYear = now.getFullYear();
    
    const newYear = new Date(`January 1, 2026 00:00:00`);

    const diff = newYear - now;
    

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent =
        hours < 10 ? "0" + hours : hours;
    document.querySelector(".minutes").textContent =
        minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".seconds").textContent =
        seconds < 10 ? "0" + seconds : seconds;
}

updateTimer();
setInterval(updateTimer, 1000);
document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('bi-heart') && e.target.parentElement.classList.contains('price')){
        e.target.className = 'bi bi-heart-fill';
        e.target.style.color = 'red';
        return
    }
    
    if(e.target.classList.contains('bi-heart-fill') && e.target.parentElement.classList.contains('price')){
        e.target.className = 'bi bi-heart';
    }
});

