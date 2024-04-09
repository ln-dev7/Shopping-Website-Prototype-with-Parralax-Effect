import "./style.scss";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

const photos = document.querySelectorAll(".photo");
const backgrounds = document.querySelectorAll(".background");
const texts = document.querySelectorAll(".text");

const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");

// duration:2.5,
// ease: CustomEase.create("custom", "M0,0 C0.69,0 0,1.01 1,1 "),

let currentSlide = 0;
