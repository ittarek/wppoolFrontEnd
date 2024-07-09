// for header
window.addEventListener("scroll", function () {
  let header = document.getElementsByTagName("header")[0];
  if (window.scrollY > 520) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// for select
  document.querySelectorAll(".custom-select").forEach(select => {
    select.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });
    select.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });

  // for chart
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WPPOOL",
        data: [
          0, 5, 0, 20, 22, 10, 35, 55, 40, 65, 40, 60, 30, 30, 25, 22, 22, 30,
          25, 40, 35, 45, 35, 35, 43, 38, 45, 40, 35, 40, 35, 45, 50, 60, 45,
          55, 50, 25, 22, 22, 30, 25, 40, 35, 45, 35, 35, 43, 38, 45, 40, 35,
          40, 35, 45, 50, 60, 45, 55, 50,
        ],
        borderColor: "#ff0000",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        width: "20px",
        height: "20px",
        fill: false,
      },
      {
        label: "Google",
        data: [0, 5, 15, 25, 35, 45],
        borderColor: "#00ff00",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        fill: false,
      },
      {
        label: "Microsoft",
        data: [0, 15, 10, 20, 30, 40],
        borderColor: "#0000ff",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        fill: false,
      },
      {
        label: "Twitter",
        data: [0, 10, 25, 15, 20, 30],
        borderColor: "#ff00ff",
        backgroundColor: "rgba(255, 0, 255, 0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: "WAPPOOL",
        },
       
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
      },
    },
  };

  new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
});

// for menu
let menuToggle = document.querySelector(".menuToggle");
let menuItems = document.querySelector(".menuItems");
let menuItemsLi = document.querySelectorAll(".menuItems li");
let menuToggleclose = document.querySelector(".menuToggleclose");

menuToggle.onclick = function () {
  menuItems.classList.toggle("active");
};
menuToggleclose.onclick = function () {
  menuItems.classList.remove("active");
};

function activeLink() {
  menuItemsLi.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
}

menuItemsLi.forEach(item => item.addEventListener("click", activeLink));

// slider
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
