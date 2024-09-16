//document.getElementById("count-el").innerText = 5

//initialize the count as 0.
//listen for clicks on the increment button
//increment the count variable when the button is clicked.
//change the count-el in the HTML to reflect the new count.
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0; //global value!

function increment() {
    count += 1;
    countEl.textContent = count;  //joined to button "INCREMENT"  
}

function save(){
    let countStr = (count + " - ");
    saveEl.textContent += countStr; //joined to button "SAVE" 
    countEl.textContent = 0;
    count = 0; //increment button minns vad sista siffra är. Det vill vi ej.
    //därför nollställs även global value count här inne.
}


let username = "My";
let message = "You have three new notifications";
console.log(username + ""+ message);

//welcome-el code
let welcomeEl = document.getElementById("welcome-el");
let name = "Duck";
let greet = "Welcome!";
welcomeEl.innerText = greet + name;
welcomeEl.innerText += "👋";