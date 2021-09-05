"use strict";

const container = document.querySelector('.container')
const upBtn = document.querySelector('.right-button');
const downBtn = document.querySelector('.left-button');
const leftSlider = document.querySelector('.left-slider')
const rightSlider = document.querySelector('.right_slider');
const slidesCount = rightSlider.querySelectorAll('div').length;

let currentSlide = 0;
const height = leftSlider.clientHeight;

leftSlider.style.top = `-${(slidesCount - 1) * 100}vh`;
upBtn.addEventListener('click', () => 
{
  changeSlide('down');
});
downBtn.addEventListener('click', () => 
{
  changeSlide('up');
});

function changeSlide(dir)
{
  if(dir === 'up')
    {
      currentSlide++;
      if(currentSlide === slidesCount)
        currentSlide = 0;
    }
  else
    {
      currentSlide--;
      if(currentSlide < 0)
        currentSlide = slidesCount - 1;
    }
  
    rightSlider.style.transform = `translateY(-${currentSlide * height}px)`;
    leftSlider.style.transform = `translateY(${currentSlide * height}px)`;
}

