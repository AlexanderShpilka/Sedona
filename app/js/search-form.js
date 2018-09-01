const searchHotelBtn = document.querySelector('.order__btn');
const searchForm = document.querySelector('.order__search-form');

const adultsInput = document.getElementById('adults');
let adultsInputValue = +adultsInput.value;
const adultsBtnIncr = document.getElementById('adults-btn-incr');
const adultsBtnDecr = document.getElementById('adults-btn-decr');

const childrenInput = document.getElementById('children');
let childrenInputValue = +childrenInput.value;
const childrenBtnIncr = document.getElementById('children-btn-incr');
const childrenBtnDecr = document.getElementById('children-btn-decr');

// SHOW / HIDE SEARCH FORM
searchHotelBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  searchForm.classList.toggle('order__search-form--show');
});

window.addEventListener('keydown', function(evt) {
  if (
    evt.keyCode === 27 &&
    searchForm.classList.contains('order__search-form--show')
  ) {
    evt.preventDefault();
    searchForm.classList.remove('order__search-form--show');
  }
});

// INCREASE ADULTS
adultsBtnIncr.addEventListener('click', function(evt) {
  adultsInputValue++;
  adultsInput.value = '' + adultsInputValue;
});

// DECREASE ADULTS
adultsBtnDecr.addEventListener('click', function(evt) {
  if (adultsInputValue > 1) {
    adultsInputValue--;
    adultsInput.value = '' + adultsInputValue;
  }
});

// INCREASE CHILDREN
childrenBtnIncr.addEventListener('click', function(evt) {
  childrenInputValue++;
  childrenInput.value = '' + childrenInputValue;
});

// DECREASE CHILDREN
childrenBtnDecr.addEventListener('click', function(evt) {
  if (childrenInputValue > 0) {
    childrenInputValue--;
    childrenInput.value = '' + childrenInputValue;
  }
});
