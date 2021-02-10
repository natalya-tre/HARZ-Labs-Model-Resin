'use strict';
// select weight and color
let weight = 'kilo', 
color = 'white'

function getStaticInformation(parentSelector, activeClass) {
  const elements = document.querySelectorAll(`${parentSelector} div`);

  elements.forEach(elem => {
    elem.addEventListener ('click', (e)=> {
      if (e.target.getAttribute('data-color')) {
        color = e.target.getAttribute('data-color');
      } else {
        weight = e.target.getAttribute('id');
      }

      elements.forEach(elem => {
        elem.classList.remove(activeClass);
      })

      const targetElement = e.target.nodeName === 'SPAN'? e.target.parentNode : e.target;
      targetElement.classList.add(activeClass);

    });
  })

}
getStaticInformation('#weight', 'choose-weight-item-active');
getStaticInformation('#color', 'choose-color-item-active');

// heart
const heart = document.querySelector('.heart');

heart.addEventListener ('click', (e)=> {
  heart.classList.toggle('active');
});

// price

const plusElement = document.querySelector('.plus'),
      minusElement = document.querySelector('.minus'),
      addProductblock = document.querySelector('.add-product'),
      priceElement = document.querySelector('.price');

let itemsCounter = 0;
  const onPlusClick = ( e ) => { 
  itemsCounter++; 
  updatePrice(); 
}
const onMinusClick = ( e ) => { 
  itemsCounter = itemsCounter  > 0 ? itemsCounter - 1  : 0; 
  updatePrice(); 
}
const updatePrice = () => {
    if ( itemsCounter === 0 ) {
      addProductblock.classList.remove('active');
      priceElement.innerHTML = `89 €`;
    } else {
      priceElement.innerHTML = `${itemsCounter} × 89 €`;
      addProductblock.classList.add('active');
    }
}

if ( plusElement ) {
    plusElement.addEventListener ( "click", onPlusClick  );
}
if ( minusElement ) {
    minusElement.addEventListener ( "click", onMinusClick  );    
}
updatePrice(); 


//Slider
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("wrapperSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
      