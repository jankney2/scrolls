//console.log position of all divs?

let divs = document.getElementsByTagName("div");
window.addEventListener("scroll", e => {
  let cutoff = divs[0].getBoundingClientRect().y;

  console.log(divs[0].getBoundingClientRect());
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].getBoundingClientRect().y < cutoff && i > 0) {
      divs[i].classList.add("hide");
    }
    if (divs[i].getBoundingClientRect().y > cutoff && i > 0) {
      divs[i].classList.remove("hide");
    }
  }
});
