// script.js
document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.querySelector(".chat-messages");

    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value.trim();
        if (messageText) {
            appendMessage("You", messageText);
            messageInput.value = "";
        }
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageDiv);
    }
});
