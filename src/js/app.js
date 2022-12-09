import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const title = document.querySelector("title")
  setTimeout(() => {
    title.innerHTML = "One new message"
  }, "3000")
  
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
