document.getElementById("menuButton").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("hidden");
});

document.querySelectorAll(".relative > button").forEach((button) => {
  button.addEventListener("click", function () {
    const sibling = this.nextElementSibling;
    if (sibling && sibling.classList.contains("hidden")) {
      sibling.classList.toggle("hidden");
    } else {
      document
        .querySelectorAll(".relative > .hidden:not(.group-hover)")
        .forEach((el) => {
          el.classList.add("hidden");
        });
    }
  });
});

// document.querySelectorAll(".relative .group").forEach((group) => {
//   group.addEventListener("mouseenter", function () {
//     this.querySelector(".hidden").classList.remove("hidden");
//   });
//   group.addEventListener("mouseleave", function () {
//     this.querySelector(".hidden").classList.add("hidden");
//   });
// });

document.getElementById("toggleButton").addEventListener("click", function () {
  var list = document.getElementById("myList");
  if (window.innerWidth <= 1023) {
    if (list.style.display === "none" || list.style.display === "") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }
});

window.addEventListener("resize", function () {
  var list = document.getElementById("myList");
  if (window.innerWidth > 1023) {
    list.style.display = "none";
  }
});
