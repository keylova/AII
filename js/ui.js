document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img.arrow").forEach(element => {
    element.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("toggle");
      e.currentTarget.parentNode.nextElementSibling.classList.toggle("toggle");
    });
  });
  
  
});
