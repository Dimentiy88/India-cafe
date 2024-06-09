// !=-=-=-=-=-=-= Scroll Button =-=-=-=-=-=--=-=

let upButton = document.querySelector(".up-button");

function scrollToTop() {
  const scrollStep = -window.scrollY / (1000 / 16); // 1000 миллисекунд (1 секунда)
  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 16); // 60 кадров в секунду
}

window.onscroll = function () {
  if (window.scrollY > 200) {
    upButton.classList.add("shown");
  } else {
    upButton.classList.remove("shown");
  }
};

upButton.onclick = function () {
  scrollToTop();
};
