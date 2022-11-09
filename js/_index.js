
window.onload = function() {
  var loader = document.getElementById('loader');
  setTimeout(() => { 
    loader.classList.add("hidden");
  }, 1000);
};

const lang_sw_button = document.querySelectorAll('.lang_switch');

let activeLang = 'en';
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
