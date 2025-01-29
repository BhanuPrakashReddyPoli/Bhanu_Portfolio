// Typing Animation for the Home Page
const textArray = ["Full Stack Developer", "Tech Enthusiast"];
let arrayIndex = 0,
  charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < textArray[arrayIndex].length) {
    typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Preloader
window.onload = function () {
  document.getElementById("preloader").style.display = "none";
};

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");
window.onscroll = function () {
  if (window.scrollY > 300) backToTopButton.style.display = "block";
  else backToTopButton.style.display = "none";
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth Scroll for Hire Me
document.getElementById("hire-me-btn").addEventListener("click", function () {
  window.location.href = "contact.html";
});

// Scroll Animations
const scrollElements = document.querySelectorAll(".scroll-animation");

const elementInView = (el, dividend = 1.25) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});