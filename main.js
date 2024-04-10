import "./style.scss";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

const photos = document.querySelectorAll(".photo");
const backgrounds = document.querySelectorAll(".background");
const texts = document.querySelectorAll(".text");

const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");

// duration:2,
// ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),

let currentSlide = 1;

arrowNext.addEventListener("click", () => {
  if (currentSlide === 3) {
    alert("You are on the last slide, Select previous to continue");
    return;
  }
  backgrounds.forEach((background) => {
    gsap.to(background, {
      duration: 2,
      ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),
      x: `-${currentSlide * 100}%`,
    });
  });
  texts.forEach((text) => {
    gsap.to(text, {
      duration: 2,
      ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),
      x: `-${currentSlide * 100}%`,
    });
  });
  //   photos.forEach((photo) => {
  //     gsap.to(photo, {
  //       duration: 2,
  //       ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),
  //       x: `-${currentSlide * 100}%`,
  //     });
  //   });
  currentSlide++;
});

arrowPrev.addEventListener("click", () => {
  if (currentSlide === 1) {
    alert("You are on the first slide, Select next to continue");
    return;
  }
  backgrounds.forEach((background) => {
    gsap.to(background, {
      duration: 2,
      ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),
      x: `-${(currentSlide - 2) * 100}%`,
    });
  });
  texts.forEach((text) => {
    gsap.to(text, {
      duration: 2,
      ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),
      x: `-${(currentSlide - 2) * 100}%`,
    });
  });
  //   photos.forEach((photo) => {
  //     gsap.to(photo, {
  //       duration: 2,
  //       ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),
  //       x: `-${(currentSlide - 2) * 100}%`,
  //     });
  //   });
  currentSlide--;
});
