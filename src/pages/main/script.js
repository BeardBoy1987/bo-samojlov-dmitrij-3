// swiper slider

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// selfmade slider

const wrapper = document.querySelector(".selfmade-slider__wrapper");
const innerWrapper = document.querySelector(".selfmade-slider__inner-wrapper");
const prevBtn = document.querySelector(".prev-btn-js");
const nextBtn = document.querySelector(".next-btn-js");
const dotPagination = document.querySelector(".selfmade-slider__pagination");

const slides = document.querySelectorAll(".selfmade-slider__slide");
const numberOfSlides = slides.length;
const slideWidth = 1000;

let activeSlide = 0;

innerWrapper.style.transition = "margin-left 0.5s";


const changeActiveSlide = (direction) => {
  const initialMarginLeft = Number(getComputedStyle(innerWrapper).marginLeft.split("px")[0]);

  switch (direction) {
    case "prev":
      if (activeSlide !== 0) {
        innerWrapper.style.marginLeft = `${initialMarginLeft + slideWidth}px`;
        activeSlide -= 1;
        nextBtn.removeAttribute("disabled");
        changeActiveDot(activeSlide)
      } else if (activeSlide === 0) {
        prevBtn.setAttribute("disabled", "disabled");
      }
      break;
    
    case "next":
      if (activeSlide !== numberOfSlides - 1) {
        innerWrapper.style.marginLeft = `${initialMarginLeft - slideWidth}px`;
        activeSlide += 1;
        prevBtn.removeAttribute("disabled");
        changeActiveDot(activeSlide)
      } else if (activeSlide === numberOfSlides - 1) {
        nextBtn.setAttribute("disabled", "disabled");
      }
      break;
    
    default:
  }
};

const changeActiveDot = (index) => {
  const activeDot = "selfmade-slider__dot--active";
  const currentActiveDot = document.querySelector(`.${activeDot}`);
  currentActiveDot.classList.remove(activeDot);

  dotPagination.children[index].classList.add(activeDot)

  if (activeDot !== numberOfSlides[0]) {
    prevBtn.removeAttribute("disabled");
  }

  if (activeSlide === 0) {
    prevBtn.setAttribute("disabled", "disabled");
  }

  if (activeSlide === numberOfSlides - 1) {
    nextBtn.setAttribute("disabled", "disabled");
  }

  if (index === 0) {
    nextBtn.removeAttribute("disabled");
  }

  if (index === numberOfSlides - 1) {
    prevBtn.removeAttribute("disabled");
  }

}

for (let i = 0; i < innerWrapper.children.length; i++) {
  let dot = document.createElement("button");
  i === activeSlide
    ? dot.classList.add("selfmade-slider__dot", "selfmade-slider__dot--active")
    : dot.classList.add("selfmade-slider__dot");
  
  const activeIndex = i;
  dot.addEventListener('click', () => {
    innerWrapper.style.marginLeft = `-${activeIndex * slideWidth}px`;
    activeSlide = activeIndex;
    changeActiveDot(activeIndex)
  })
  dotPagination.append(dot)
};

prevBtn.addEventListener('click', () => changeActiveSlide("prev"));
nextBtn.addEventListener('click', () => changeActiveSlide("next"));

