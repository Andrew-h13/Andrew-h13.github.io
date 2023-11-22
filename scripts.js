/*Chatbot pop up function*/


document.getElementById("chatButton").addEventListener("click", openChat);

function openChat() {
    document.getElementById("chatPopup").style.display = "block";
}

function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
}