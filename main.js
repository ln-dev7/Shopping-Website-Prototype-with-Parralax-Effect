import "./style.scss";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

const photos = document.querySelectorAll(".photo");
const backgrounds = document.querySelectorAll(".background");
const texts = document.querySelectorAll(".text");
const photosImages = document.querySelectorAll(".photo img");
const photosDeailImages = document.querySelectorAll(".photo-detail img");
const aside = document.querySelector(".aside");
const backgroundContainer = document.querySelector(".background-container");
const textContainer = document.querySelector(".text-container");
const back = document.querySelector(".back");
const arrowsContainer = document.querySelector(".arrows-container");
const arrowsImgContainer = document.querySelector(".arrows-img-container");

const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");

const arrowImgNext = document.querySelector(".arrow-img-next");
const arrowImgPrev = document.querySelector(".arrow-img-prev");

const view = document.querySelector(".view");

// duration:2,
// ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),

const ease = CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 ");

photosImages.forEach((photo, index) => {
  photo.style.paddingLeft = `${backgrounds[0].offsetWidth / 4 + 384}px`;
});

let currentSlide = 1;

arrowNext.addEventListener("click", () => {
  if (currentSlide >= 3) {
    alert("You are on the last slide, Select 'Quick View' to continue");
    return;
  }
  backgrounds.forEach((background) => {
    gsap.to(background, {
      duration: 2,
      ease: ease,
      x: `-${currentSlide * 100}%`,
    });
  });
  texts.forEach((text) => {
    gsap.to(text, {
      duration: 2,
      ease: ease,
      x: `-${currentSlide * 100}%`,
    });
  });
  photos.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      x: `-${currentSlide * 100}%`,
    });
  });
  currentSlide++;
});

arrowPrev.addEventListener("click", () => {
  if (currentSlide <= 1) {
    alert("You are on the first slide, Select next to continue");
    return;
  }
  backgrounds.forEach((background) => {
    gsap.to(background, {
      duration: 2,
      ease: ease,
      x: `-${(currentSlide - 2) * 100}%`,
    });
  });
  texts.forEach((text) => {
    gsap.to(text, {
      duration: 2,
      ease: ease,
      x: `-${(currentSlide - 2) * 100}%`,
    });
  });
  photos.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      x: `-${(currentSlide - 2) * 100}%`,
    });
  });
  currentSlide--;
});

view.addEventListener("click", () => {
  gsap.to(aside, {
    duration: 2,
    ease: ease,
    x: "-384px",
  });
  gsap.to(backgroundContainer, {
    duration: 2,
    ease: ease,
    width: "50%",
    x: "-384px",
  });
  gsap.to(textContainer, {
    duration: 2,
    ease: ease,
    width: "50%",
    x: "-384px",
  });
  gsap.to(back, {
    duration: 2,
    ease: ease,
    zIndex: 30,
  });
  gsap.to(arrowsContainer, {
    duration: 0,
    ease: ease,
    display: "none",
  });
  gsap.to(arrowsImgContainer, {
    duration: 0,
    ease: ease,
    display: "flex",
  });

  gsap.to(".photo-3", {
    duration: 2,
    ease: ease,
    scale: 1.2,
  });

  photosImages.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      paddingLeft: `${backgrounds[0].offsetWidth / 2}px`,
    });
  });

  photosDeailImages.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      paddingLeft: `${backgrounds[0].offsetWidth / 6}px`,
    });
  });

  texts.forEach((text) => {
    gsap.to(text, {
      duration: 2,
      ease: ease,
      x: `-${3 * 100}%`,
    });
  });
});

back.addEventListener("click", () => {
  currentSlide = 3;
  gsap.to(aside, {
    duration: 2,
    ease: ease,
    x: "0px",
  });
  gsap.to(backgroundContainer, {
    duration: 2,
    ease: ease,
    width: `calc(50% - 197px)`,
    x: "0px",
  });
  gsap.to(textContainer, {
    duration: 2,
    ease: ease,
    width: `calc(50% - 197px)`,
    x: "0px",
  });
  gsap.to(back, {
    duration: 2,
    ease: ease,
    zIndex: -30,
  });
  gsap.to(arrowsContainer, {
    duration: 0,
    ease: ease,
    display: "flex",
  });
  gsap.to(arrowsImgContainer, {
    duration: 0,
    ease: ease,
    display: "none",
  });

  gsap.to(".photo-3", {
    duration: 2,
    ease: ease,
    scale: 1,
  });

  photos.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      x: `-${2 * 100}%`,
    });
  });
  photosImages.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      paddingLeft: `${backgrounds[0].offsetWidth / 6 + 384}px`,
    });
  });
  texts.forEach((text) => {
    gsap.to(text, {
      duration: 2,
      ease: ease,
      x: `-${2 * 100}%`,
    });
  });
});

arrowImgNext.addEventListener("click", () => {
  if (currentSlide === 6) {
    alert("You are on the last slide, Select Prev to continue");
    return;
  }
  photos.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      x: `-${currentSlide * 100}%`,
    });
  });
  currentSlide++;
});

arrowImgPrev.addEventListener("click", () => {
  if (currentSlide === 3) {
    alert("You are on the first slide, Select 'Back' to Back");
    return;
  }
  photos.forEach((photo) => {
    gsap.to(photo, {
      duration: 2,
      ease: ease,
      x: `-${(currentSlide - 2) * 100}%`,
    });
  });
  currentSlide--;
});
