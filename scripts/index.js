var releaseingDate = new Date("Jan 1, 2025 00:00:00").getTime();

var countdown = document.querySelector('div.countdown');
var countdown_days = document.querySelector('div.countdown span.days span.number');
var countdown_hours = document.querySelector('div.countdown span.hours span.number');
var countdown_minutes = document.querySelector('div.countdown span.minutes span.number');
var countdown_seconds = document.querySelector('div.countdown span.seconds span.number');

var contact_us = document.querySelector('a.contact');

var contact_us_panel = document.querySelector('.contact-us');
var contact_us_close = document.querySelector('.contact-us i.close');

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = releaseingDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if ( days.toString().length < 2 ) {
        days = "0" + days.toString();

    }   if ( hours.toString().length < 2 ) {
        hours = "0" + hours.toString();

    }   if ( minutes.toString().length < 2 ) {
        minutes = "0" + minutes.toString();

    }   if ( seconds.toString().length < 2 ) {
        seconds = "0" + seconds.toString();

    }

    countdown_days.innerHTML = days;
    countdown_hours.innerHTML = hours;
    countdown_minutes.innerHTML = minutes;
    countdown_seconds.innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        countdown_days.innerHTML = "00";
        countdown_hours.innerHTML = "00";
        countdown_minutes.innerHTML = "00";
        countdown_seconds.innerHTML = "00";
    }
}, 1000);

contact_us.addEventListener("click", (e) => {
    e.preventDefault();
    contact_us_panel.classList.add('show');
    
});

contact_us_close.addEventListener("click", (e) => {
    e.preventDefault();
    contact_us_panel.classList.remove('show');

});