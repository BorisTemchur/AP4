//write here your js

document.addEventListener("DOMContentLoaded", function() {
    // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
    // Это как Document ready, только для vanila js
});

$(document).ready(function() {
  $('.language-btn').click(function() {
    $('.language-dropdown').toggle();
  });

  $('.language-option').click(function(e) {
    e.preventDefault();
    var selectedLanguage = $(this).text();
    $('.language-btn').text(selectedLanguage);
    $('.language-dropdown').hide();

    // Дополнительные действия при изменении языка
    if (selectedLanguage === 'RU') {
      // Действия для русского языка
    } else if (selectedLanguage === 'ENG') {
      // Действия для английского языка
    }
  });

  $(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.language-select') && !$(target).parents().is('.language-select')) {
      $('.language-dropdown').hide();
    }
  });
});


let sliderWrap = document.querySelector('.slider-wrap');
let slider = document.querySelector('.slider');
let clonesWidth;
let sliderWidth;
let clones = [];
let scrollPos =1
let sliderHover = false;
let req; 
let items = [...document.querySelectorAll('.slider-item')];
let images = [...document.querySelectorAll('.img-div')];

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(${imgLinks[idx]})`
})

items.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
})

sliderWrap.addEventListener('mouseover', () =>{
    sliderHover = true;
})

sliderWrap.addEventListener('mouseleave', () =>{
    sliderHover = false;
})

sliderWrap.addEventListener('scroll', ()=> {
   console.log(sliderWrap.scrollLeft);
  if (sliderWrap.scrollLeft >= (sliderWidth - sliderWrap.clientWidth)) {
    sliderWrap.scrollTo((clonesWidth-sliderWrap.clientWidth),0);
  };

   if (sliderWrap.scrollLeft == 0) {
    sliderWrap.scrollTo((clonesWidth),0);
  }


});


function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}


function scrollUpdate(){
    if(window.innerWidth > 760){
        sliderWrap.style.overflow = 'hidden';
        if(!sliderHover){
            scrollPos -= 2
        }

        if(clonesWidth + scrollPos >= sliderWidth){
            window.scrollTo({top: 1});
            scrollPos = 1;
        }else if(scrollPos <= 0){
            window.scrollTo({top: sliderWidth - clonesWidth - 1})
            scrollPos = sliderWidth - clonesWidth - 1
        }
        slider.style.transform = `translateX(${-scrollPos}px)`

        req = requestAnimationFrame(scrollUpdate)
    }else{
        sliderWrap.style.overflow = 'scroll';
    }

}

window.addEventListener('resize', onLoad)

function onLoad(){
    cancelAnimationFrame(req);
    calaculateDimensions()
    document.body.style.height = `${sliderWidth}px`
    scrollPos = 1;
  sliderWrap.scrollTo((sliderWidth - sliderWrap.clientWidth)/2,0);
}


function calaculateDimensions(){

    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}

onLoad()

function check() {
var submit = document.getElementsByName('submit')[0];
if (document.getElementById('politics').checked)
submit.disabled = '';
else
submit.disabled = 'disabled';
}
