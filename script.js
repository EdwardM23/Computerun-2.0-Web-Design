function toggleBenefits() {
  var btn = document.getElementById("btn-see-more");
  const divs = document.getElementsByClassName("item-more");
  for (var i = 0; i < 4; i++) {
    if (divs[i].style.display === "none") {
      divs[i].style.display = "flex";
      divs[i].style.flexDirection = "column";
      divs[i].style.alignItems = "center";
      divs[i].style.width = "150px";
      divs[i].style.justifyContent = "center";

      btn.innerText = "See less";
    } else {
      divs[i].style.display = "none";
      btn.innerText = "See more";
    }
  }
}

function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu");
  var burger = document.getElementById("burger");
  var close = document.getElementById("burger-close");

  if (mobileMenu.style.display == "flex") {
    mobileMenu.style.display = "none";
    burger.style.display = "block";
    close.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
    burger.style.display = "none";
    close.style.display = "block";
  }
}
