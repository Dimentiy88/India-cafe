const items = document.querySelectorAll(".reviews__item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentItem = 0;

function showItem(index) {
  items.forEach((item) => item.classList.remove("active"));
  items[index].classList.add("active");
}

function showNextItem() {
  currentItem = (currentItem + 1) % items.length;
  showItem(currentItem);
}

function showPrevItem() {
  currentItem = (currentItem - 1 + items.length) % items.length;
  showItem(currentItem);
}

function handleWindowSizeChange() {
  if (window.innerWidth <= 425) {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
    showItem(currentItem);
  } else {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    items.forEach((item) => item.classList.add("active"));
  }
}

nextBtn.addEventListener("click", showNextItem);
prevBtn.addEventListener("click", showPrevItem);

// Показываем первый элемент при загрузке страницы
showItem(currentItem);

window.addEventListener("resize", handleWindowSizeChange);
handleWindowSizeChange();
