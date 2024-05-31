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