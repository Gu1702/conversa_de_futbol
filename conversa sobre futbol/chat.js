function addUser(){
user_name = document.getElementById("user_name").value;
locationStorage.setItem("user_name", user_name);

window.location = "chat_room.html";
}