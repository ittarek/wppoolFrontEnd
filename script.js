const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");
const currentPageElem = document.getElementById("current-page");
const nextPageElem = document.getElementById("next-page");
const totalPagesElem = document.getElementById("total-pages");
const pageInput = document.getElementById("page-input");

let currentSlide = 0;

totalPagesElem.textContent = slides.length;

document.getElementById("next").addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

document.getElementById("go-to-page").addEventListener("click", () => {
  const pageNumber = parseInt(pageInput.value, 10);
  if (pageNumber >= 1 && pageNumber <= slides.length) {
    goToSlide(pageNumber - 1); 
    pageInput.value = ""; 
  } else {
    alert(`Please enter a number between 1 and ${slides.length}.`);
  }
});

function goToSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
  updatePagination();
}

function updatePagination() {
  currentPageElem.textContent = currentSlide + 1;
  nextPageElem.textContent =
    currentSlide + 2 > slides.length ? 1 : currentSlide + 2;
}

updatePagination();

