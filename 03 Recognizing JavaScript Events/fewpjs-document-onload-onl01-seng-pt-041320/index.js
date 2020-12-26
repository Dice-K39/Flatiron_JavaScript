// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
});

function updateDOM() {
    document.getElementById("text").innerHTML = "This is really cool!";
}

// First Attempt
// let text = document.getElementById("text");

// document.addEventListener("DOMContentLoaded", function() {
//     text.textContent = "This is really cool!";
//     console.log("The DOM has loaded");
// });

// console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");