document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");
const inputName = document.getElementById("Name");
const inputEmail = document.getElementById("Email");
const inputComments = document.getElementById("comments");

const displayMessage = (message, type) => {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.className = `alert alert-${type} mt-3`;
    form.appendChild(messageDiv);

    setTimeout (() => {
        messageDiv.remove();        
    }, 3000);
};

const emailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

form.addEventListener("submit", (evt) => {
evt.preventDefault();

const name = inputName.value.trim();
const email = inputEmail.value.trim();
const comment = inputComments.value.trim();

if (!name|| !email || !comment) {
    displayMessage("please fill out the entire form", "danger");
    return;
}

if (!emailValid(email)) {
    displayMessage("Please enter a proper email adress", "warning");
    return;
}

displayMessage("thank you for your message", "sucess");

form.reset();



     
    
})});
  