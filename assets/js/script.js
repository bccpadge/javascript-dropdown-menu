// declare variables
const dropdrownBtn = document.querySelector("[data-btn]");
const dropdownMenu = document.querySelector("[data-dropdown]");
const toggleArrow = document.querySelector("[data-arrow]");

// function to toggle the show class on the dropdown element and rotate the dropdown when the button is clicked
const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow-icon");
};

// call the function above on the dropdown button using the addEventListener
dropdrownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// close the dropdown menu when a DOM element is clicked
document.documentElement.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});
