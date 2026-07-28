/* ==========================================
   INTERACTIVE PORTFOLIO WEBSITE
   Week 3 - JavaScript
========================================== */

/* ==========================================
   SELECTING HTML ELEMENTS
========================================== */

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

const darkModeBtn = document.getElementById("darkModeBtn");

const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");


/* ==========================================
   MOTIVATIONAL QUOTES
========================================== */

const quotes = [

"Success is the sum of small efforts repeated every day.",

"Dream big and dare to fail.",

"Believe in yourself and all that you are.",

"Practice makes progress.",

"Every expert was once a beginner.",

"Stay positive and keep learning.",

"Hard work beats talent when talent doesn't work hard."

];


/* ==========================================
   SHOW RANDOM QUOTE
========================================== */

function generateQuote() {

    const random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random];

}

quoteBtn.addEventListener("click", generateQuote);


/* ==========================================
   DARK MODE
========================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        darkModeBtn.innerHTML="☀️ Light Mode";

    }

    else{

        localStorage.setItem("theme","light");

        darkModeBtn.innerHTML="🌙 Dark Mode";

    }

}

darkModeBtn.addEventListener("click",toggleDarkMode);


/* ==========================================
   LOAD SAVED THEME
========================================== */

window.onload=function(){

    const savedTheme=localStorage.getItem("theme");

    if(savedTheme==="dark"){

        document.body.classList.add("dark-mode");

        darkModeBtn.innerHTML="☀️ Light Mode";

    }

}


/* ==========================================
   CLEAR ERROR MESSAGES
========================================== */

function clearErrors(){

    nameError.textContent="";

    emailError.textContent="";

    messageError.textContent="";

    successMessage.textContent="";

}


/* ==========================================
   EMAIL VALIDATION
========================================== */

function isValidEmail(email){

    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* ==========================================
   FORM VALIDATION
========================================== */

function validateForm(event){

    event.preventDefault();

    clearErrors();

    let valid=true;

    if(nameInput.value.trim()===""){

        nameError.textContent="Please enter your name.";

        valid=false;

    }

    if(emailInput.value.trim()===""){

        emailError.textContent="Please enter your email.";

        valid=false;

    }

    else if(!isValidEmail(emailInput.value)){

        emailError.textContent="Please enter a valid email address.";

        valid=false;

    }

    if(messageInput.value.trim()===""){

        messageError.textContent="Please enter your message.";

        valid=false;

    }

    else if(messageInput.value.length<10){

        messageError.textContent="Message should contain at least 10 characters.";

        valid=false;

    }

    if(valid){

        successMessage.textContent="Message sent successfully!";

        form.reset();

    }

}

form.addEventListener("submit",validateForm);


/* ==========================================
   REAL-TIME VALIDATION
========================================== */

nameInput.addEventListener("input",function(){

    if(nameInput.value.trim()!==""){

        nameError.textContent="";

    }

});

emailInput.addEventListener("input",function(){

    if(isValidEmail(emailInput.value)){

        emailError.textContent="";

    }

});

messageInput.addEventListener("input",function(){

    if(messageInput.value.length>=10){

        messageError.textContent="";

    }

});


/* ==========================================
   HOVER EFFECT USING JAVASCRIPT
========================================== */

const cards=document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseover",function(){

        card.style.transform="scale(1.08)";

    });

    card.addEventListener("mouseout",function(){

        card.style.transform="scale(1)";

    });

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("Interactive Portfolio Website Loaded Successfully.");