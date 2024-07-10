// for header
window.addEventListener("scroll", function () {
  let header = document.getElementsByTagName("header")[0];
  if (window.scrollY > 550) {
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


Highcharts.chart("myChart", {
  chart: {
    type: "spline",
    // styledMode: true,
  },
  title: {
    text: " ",
  },
  xAxis: {
    tickPositions: [3, 7, 11, 15, 19, 23],
    categories: [
      "",
      "",
      "",
      "Feb",
      "",
      "",
      "",
      "Mar",
      "",
      "",
      "",
      "Apr",
      "",
      "",
      "",
      "May",
      "",
      "",
      "",
      "Jun",
      "",
      "",
      "",
      "Jul",
    ],
    legend: {
      layout: "vertical",
      floating: true,
      align: "left",
      x: 100,
      verticalAlign: "top",
      y: 70,
    },
    tickPositions: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ],
  
    plotLines: [
      {
        color: "#9FA0A1",
        width: 1,
        value: -0.5,
        zIndex: 3,
      },
      {
        color: "#9FA0A1",
        width: 1,
        value: 23.5,
        zIndex: 3,
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      format: "{value}%",
    },
    tickPositions: [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    plotLines: [
      {
        color: "#9FA0A1",
        width: 1,
        value: -10,
        zIndex: 3,
      },
      {
        color: "#9FA0A1",
        width: 1,
        value: 100,
        zIndex: 3,
      },
    ],
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },

  series: [
    {
      name: "WPPOOL",
      data: [
        0, 20, 22, 25, 18, 20, 55, 60, 20, 22, 5.2, 5.7, 8.7, 13.9, 18.2, 21.4,
        100,
      ],
      style: {
        backgroundColor: "#FC714D",
        color: "blue",
      },
    },
    {
      name: "Google",
      data: [
        0, 10, 20, 20, 55, 2, 6, 4, 8, 25, 35, 26, 25, 58, 9, 26, 45, 24, 100,
      ],
      backgroundColor: "#615DE3",
    },
    {
      name: "Microsoft",
      data: [
        0, 10, 20, 20, 55, 25, 26, 25, 58, 9, 26, 45, 24, 100, 55, 25, 26, 25,
        58, 9, 26, 45, 24, 100,
      ],
      backgroundColor: "#AFCD80",
    },
    {
      name: "Tweeter",
      data: [
        0, 10, 10, 50, 40, 10, 8, 9, 55, 20, 20, 55, 25, 26, 25, 58, 9, 26, 45,
        24, 100,
      ],
      backgroundColor: "#6F34A1",
    },
  ],
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
