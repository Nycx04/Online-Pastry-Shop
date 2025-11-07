let popup = document.getElementById("popup"); 
let username;
let password;

function openPopup() {
    popup.classList.add("open-popup");
}

// Wait for DOM to load before attaching the submit handler
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".submit").addEventListener("click", function (e) {
        e.preventDefault(); // Prevents form submission/page refresh
        
        username = document.getElementById("usernameInput").value;
        password = document.getElementById("passwordInput").value;

        console.log("Username:", username); // Debug line
        console.log("Password:", password); // Debug line

        document.getElementById("unconfirm").textContent = `Your username is ${username}`;
        document.getElementById("psconfirm").textContent = `Your password is ${password}`;
    });
});
