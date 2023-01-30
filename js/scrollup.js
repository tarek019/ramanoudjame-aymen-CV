// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');
const scrollToTopButton2 = document.getElementById('js-top2');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 1000) {
    scrollToTopButton.className = "back-btn show";
  } else {
    scrollToTopButton.className = "back-btn hide";
  }

  if (y > 6500) {
    scrollToTopButton2.className = "back-btn-wrap show";
  } else {
    scrollToTopButton2.className = "back-btn-wrap hide";
  }

};


window.addEventListener("scroll", scrollFunc);
