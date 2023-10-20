let homeCount = 0;
let guestCount = 0;

const homeBtn1 = document.getElementById("home-btn1");
const homeBtn2 = document.getElementById("home-btn2");
const homeBtn3 = document.getElementById("home-btn3");
const homeScoreNum = document.getElementById("home-scoreNum");

const guestBtn1 = document.getElementById("guest-btn1");
const guestBtn2 = document.getElementById("guest-btn2");
const guestBtn3 = document.getElementById("guest-btn3");
const guestScoreNum = document.getElementById("guest-scoreNum");


homeBtn1.addEventListener("click", function() {
    homeCount += 1;
    homeScoreNum.textContent = homeCount;
})

homeBtn2.addEventListener("click", function() {
    homeCount += 2;
    homeScoreNum.textContent = homeCount;
})

homeBtn3.addEventListener("click", function() {
    homeCount += 3;
    homeScoreNum.textContent = homeCount;
})

guestBtn1.addEventListener("click", function() {
    guestCount += 1;
    guestScoreNum.textContent = guestCount;
})

guestBtn2.addEventListener("click", function() {
    guestCount += 2;
    guestScoreNum.textContent = guestCount;
}) 

guestBtn3.addEventListener("click", function() {
    guestCount += 3;
    guestScoreNum.textContent = guestCount;
})
