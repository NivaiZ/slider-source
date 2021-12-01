const slideButtonUp = document.querySelector('.up-button');
const slideButtonDown = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSide = document.querySelector('.main-slide');
const slidesCount = mainSide.querySelectorAll('div').length;
const container = document.querySelector('.container');
sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;
let activeSlideIndex = 0;

slideButtonUp.addEventListener('click', () => {
    onChangeSlide('up');
});

slideButtonDown.addEventListener('click', () => {
    onChangeSlide('down');
});
document.addEventListener('keydown', evt => {
    if (evt.key === 'ArrowUp') {
        onChangeSlide('up');
    } else if (evt.key === 'ArrowDown') {
        onChangeSlide('down');

    }
})
const onChangeSlide = (direction) => {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}