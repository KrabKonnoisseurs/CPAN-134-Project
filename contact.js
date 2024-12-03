document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");
const inputName = document.getElementById("Name");
const inputEmail = document.getElementById("Email");
const inputComments = document.getElementById("comments");

const displayMessage = (message, type) => {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.className = `alert alert ${type} mt-3` ;
    form.appendChild(messageDiv);

    setTimeout (() => {
        messageDiv.remove();
    }, 3000);
};
}

)
  