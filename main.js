const mainSlide = document.querySelector('#reviews')
const reviews = document.querySelectorAll('.review')
const slidesCount = mainSlide.querySelectorAll('div.review').length
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.previous')

let activeSlideIndex = 1

nextBtn.addEventListener('click', () => {
    changeSlide('next')
})

prevBtn.addEventListener('click', () => {
    changeSlide('prev')
})

function changeSlide(direction) {
    if (direction === 'next') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) activeSlideIndex = 0
    } else if (direction === 'prev') {
        activeSlideIndex--
        if (activeSlideIndex < 0) activeSlideIndex = slidesCount - 1
    }
    clearActiveClasses()
    reviews[activeSlideIndex].classList.add('active')
}

function clearActiveClasses() {
    reviews.forEach((review) => {
        review.classList.remove('active')
    })
}

const timer = document.querySelector('#timer')
let time = 1800

setInterval(decreaseTime, 1000)

function decreaseTime()
{
    if (time === 0)
    {
        endTime()
    }
    else
    {
        let currentTime = --time
        setTime(currentTime)
    }
}

function setTime(value) 
{
    let seconds = value % 60
    let minutes = (value - seconds)/60
    if (minutes < 10)
    {
        if (seconds < 10)
        {
            timer.innerHTML = `0${minutes}:0${seconds}`
        }
        else
        {
            timer.innerHTML = `0${minutes}:${seconds}`
        }
    }
    else
    {
        if (seconds < 10)
        {
            timer.innerHTML = `${minutes}:0${seconds}`
        }
        else
        {
            timer.innerHTML = `${minutes}:${seconds}`
        }
    }
}

const input = document.querySelector('#phnum');

input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) 
    {
		return;
	} 
    else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а также Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) 
        {
			event.preventDefault();
		}
	}
});