// ! -=-=-=-=-=-=-= Rewievs Arrows =-=-=-=-=-=-=-

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
  if (window.innerWidth <= 576) {
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

showItem(currentItem);

window.addEventListener("resize", handleWindowSizeChange);
handleWindowSizeChange();

//! =-=-=-=-=-=-=-=-=- gallery =-=-=-=-=-=-=-=-

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".galerey-wrapper");
  const images = gallery.querySelectorAll(".galerey-img");
  const loadMoreBtn = document.querySelector(".galerey-btn");
  let currentIndex = 0;
  const imagesPerLoad = 2;

  function loadMoreImages() {
    const endIndex = Math.min(currentIndex + imagesPerLoad, images.length);
    for (let i = currentIndex; i < endIndex; i++) {
      images[i].style.display = "block";
    }
    currentIndex = endIndex;

    if (currentIndex >= images.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", loadMoreImages);

  // Hide all images initially
  images.forEach(function (image) {
    image.style.display = "none";
  });

  // Display the first set of images
  loadMoreImages();

  // Append the "Load More" button
  gallery.parentNode.insertBefore(loadMoreBtn, gallery.nextSibling);

  // Media query listener to show/hide button based on screen width
  const mediaQuery = window.matchMedia("(max-width: 767px)");

  function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      loadMoreBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "none";
      images.forEach(function (image) {
        image.style.display = "block";
      });
    }
  }

  handleMediaQueryChange(mediaQuery); // Initial check
  mediaQuery.addListener(handleMediaQueryChange); // Listen for changes
});

// !=-=-=-=-=-=-=-= Menu =-=-=-=-=-=-=-

document.addEventListener("DOMContentLoaded", function () {
  const cardList = document.querySelector(".recommend-list");
  const cards = cardList.querySelectorAll(".recommend-item");
  const loadMoreBtn = document.querySelector(".cards-btn");
  let currentIndex = 0;
  const cardsPerLoad = 2;

  function loadMoreCards() {
    const endIndex = Math.min(currentIndex + cardsPerLoad, cards.length);
    for (let i = currentIndex; i < endIndex; i++) {
      cards[i].style.display = "block";
    }
    currentIndex = endIndex;

    if (currentIndex >= cards.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", loadMoreCards);

  // Hide all images initially
  cards.forEach(function (card) {
    card.style.display = "none";
  });

  // Display the first set of images
  loadMoreCards();

  // Append the "Load More" button
  cardList.parentNode.insertBefore(loadMoreBtn, cardList.nextSibling);

  // Media query listener to show/hide button based on screen width
  const mediaQuery = window.matchMedia("(max-width: 767px)");

  function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      loadMoreBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "none";
      cards.forEach(function (card) {
        card.style.display = "block";
      });
    }
  }

  handleMediaQueryChange(mediaQuery);
  mediaQuery.addListener(handleMediaQueryChange);
});
