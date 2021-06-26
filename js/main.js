//DOM ELEMENTS

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//Time

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
//AM or PM

const amPM = hour >= 12 ? "PM" : "AM";

//Make 12 hour format

hour = hour % 12 || 12;

//Time output

time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} <span></span> ${amPM}`;

setTimeout(showTime, 1000);

}

//Add Zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//background
function setBackGrdGreet() {
    let today = new Date();
    hour = today.getHours();

    if (hour >= 5 && hour <= 11 ) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = "Good Morning";
    }else if (hour >=12 && hour > 18 ) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    } else {
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'white';
    }
}


// get Person

function getPerson() {
    if (localStorage.getItem('person') === null) {
        person.textContent = '[enter name]';
    } else {
        person.textContent = localStorage.getItem('person');
    }
}

//set person

function setPerson(e) {
    if (e.type === 'keypress') {
            //confirm enter is pressed
            if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('person', e.target.innerText);
            person.blur();
            }
    } else {
            localStorage.setItem('person', e.target.innerText);
    }
}
//Focus


function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set focus

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
            }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

person.addEventListener('keypress', setPerson);
person.addEventListener('blur', setPerson);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
showTime();
setBackGrdGreet();
getPerson();
getFocus();