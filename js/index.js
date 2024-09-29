let pills = document.querySelectorAll("li");
let movies = document.querySelectorAll("section");

//cbf => bei click auf irgendein pill, wird im ersten Schritt cbf ausgeführt und entfernt "selected" und "active" class/layout von vorher selected/active pill
let checkAndRemoveClass = function (array, classToCheck) {
  for (let k = 0; k < array.length; k++) {
    if (array[k].classList.contains(classToCheck)) {
      array[k].classList.remove(classToCheck);
      break;
    }
  }
};
// ruft zunächst cbf auf um bisherige Auswahl zu entfernen, um im Anschluss eigentliche operation auszuführen, die bei Event click auf pill mit index [i] dieser pill[i] class/layout selected und entsprechendem movie mit index [i] class/layout active zuweist
for (let i = 0; i < pills.length; i++) {
  pills[i].addEventListener("click", function (ev) {
    checkAndRemoveClass(movies, "active");
    checkAndRemoveClass(pills, "selected");

    pills[i].classList.add("selected");
    movies[i].classList.add("active");
  });
}
