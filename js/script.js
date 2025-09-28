// Example credentials (for demo purposes)
const validUsername = "25084";
const validPassword = "90007";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("error");

  if(username === validUsername && password === validPassword) {
    errorElement.textContent = "";
    
    // Redirect to home.html
    window.location.href = "home.html";
  } else {
    errorElement.textContent = "Invalid username or password!";
  }
}

const modal = document.getElementById("videoModal");
const btn = document.getElementById("open3DVideo");
const span = document.getElementsByClassName("close")[0];
const video = document.getElementById("modalVideo");

btn.onclick = function() {
  modal.style.display = "block";
  video.play();
}

span.onclick = function() {
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
}
