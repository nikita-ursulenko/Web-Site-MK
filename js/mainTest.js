
// ------------------------Слайдшоу NAV ---------
const _slideImage = document.querySelector('.content_image')
//Обложка которая ездит +=-100 по X
const _wrapSlideNav = _slideImage.querySelector('.slide_wrap')
// buttons prev and next
const _slideButtonsNav = _slideImage.querySelectorAll('a')



let _plusSlide = 0;
function slideShow(_wrapSlide, i) {
    _wrapSlide.style.transform = 'translateX(' + i + '%)';

}
_slideRight = _slideButtonsNav[1]
_slideRight.onclick = function () {
    _plusSlide += -100;
    if (_plusSlide <= -500) _plusSlide = 0;
    slideShow(_wrapSlideNav, _plusSlide);
}
_slideLeft = _slideButtonsNav[0]
_slideLeft.onclick = function () {
    _plusSlide += 100;
    if (_plusSlide >= 1) _plusSlide = -400;
    slideShow(_wrapSlideNav, _plusSlide)
}
//--------------SlideShow .about -------------

const _aboutContainer = document.querySelector('.about_content')
const _aboutContent = _aboutContainer.querySelectorAll('div')
// link a wrap slider
const _wrapSlideAbout = _aboutContent[21]
//link buttons next prev
const left = _aboutContent[27]
const _slideButtonsAbout = left.querySelectorAll('a')

_slideRight2 = _slideButtonsAbout[1]
_slideRight2.onclick = function () {
    _plusSlide += -100;
    if (_plusSlide <= -500) _plusSlide = 0;
    slideShow(_wrapSlideAbout, _plusSlide);
}
_slideLeft2 = _slideButtonsAbout[0]
_slideLeft2.onclick = function () {
    _plusSlide += 100;
    if (_plusSlide >= 1) _plusSlide = -400;
    slideShow(_wrapSlideAbout, _plusSlide)
}
console.log(_wrapSlide2)