window.onload = function() {
      var loader = document.getElementById('loader');
      setTimeout(() => { 
        loader.classList.add("hidden");
      }, 1000);
};



// SELECTION
const imgs = document.querySelectorAll(".imgs img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const dots = document.querySelector(".dots");

// manipulate slide
let current = 0;
let maxSlide = imgs.length;

// function for make slider
const goSlide = (slide) => {
  imgs.forEach(
    (img, i) => (img.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// function for active dots
const activeDots = function (curr) {
  document
    .querySelectorAll(".dots span")
    .forEach((dot) => dot.classList.remove("active_slide"));

  document.querySelectorAll(".dots span")[curr].classList.add("active_slide");
};

// imgs with start position "start"
goSlide(0);

// create dots depends on imgs length
for (let i = 0; i < imgs.length; i++) {
  const html = `<span data-dot="${i + 1}"></span>`;

  dots.insertAdjacentHTML("beforeend", html);
}

// start with active first dot
activeDots(0);

// slide go right
const nextSlide = function () {
  current === maxSlide - 1 ? (current = 0) : current++;

  goSlide(current);
  activeDots(current);
};

arrowRight.addEventListener("click", nextSlide);

// slide go previous
const prevSlide = function () {
  current === 0 ? (current = maxSlide - 1) : current--;

  goSlide(current);
  activeDots(current);
};

arrowLeft.addEventListener("click", prevSlide);

// slide with keyboard
window.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

// click event on dots
dots.addEventListener("click", function (e) {
  const target = e.target.closest("span");

  if (!target) return;
  const targetData = +target.dataset.dot - 1;

  goSlide(targetData);
  activeDots(targetData);

  // reset current to target data dot number
  current = targetData;
});

const lang_sw_button = document.querySelectorAll('.lang_switch');

let activeLang = 'ua';
let langList = ['ua', 'en'];

const langList_0 = document.querySelectorAll('.' + langList[0]);
const langList_1 = document.querySelectorAll('.' + langList[1]);

hide_lang(activeLang);

lang_sw_button.forEach(
  elem => langSW(elem)
);

function langSW(elem){
  elem.addEventListener('click', function (){
    switch_lang();
  })
  if (elem.innerHTML != activeLang) {
    elem.classList.toggle('hidden');
  }
}

function justSwitchLang(elem){
  elem.classList.toggle('hidden');
}

function switch_lang() {
  lang_sw_button.forEach(elem => justSwitchLang(elem));
  langList_0.forEach(elem => justSwitchLang(elem));
  langList_1.forEach(elem => justSwitchLang(elem));
  langList.forEach(elem => {
    if (elem != activeLang) {
      activeLang = elem
    }
  });
}

function hide_lang(active_lang){
  let nonActiveLang = null;
  langList.forEach( (elem) => {
    if (elem != active_lang) {
      nonActiveLang = elem;
    }
  });
  const list_elements = document.querySelectorAll('.' + nonActiveLang);
  console.log(list_elements);
  list_elements.forEach( elem => elem.classList.add('hidden') );
}
