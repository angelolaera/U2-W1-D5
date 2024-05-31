window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 400) {
    // Soglia di scroll per cambiare colore
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "#ffc017";
  }
});
