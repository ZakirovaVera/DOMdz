// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

// const arrayOfPictures = ['https://avatars.mds.yandex.net/i?id=f514163b5076e3c7a4d6971f17c3ad3cb442b211-4010175-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=28b773ea3a7e2e3024e36b0f71d3e83acf6b1313-10814666-images-thumbs&n=13', 'https://mirpozitiva.ru/wp-content/uploads/2019/11/1478783112_cvety_vesnoi.jpg', 'https://avatars.mds.yandex.net/i?id=a818850be4b0b811057271d051d2ad93ac1ab1d5-11415951-images-thumbs&n=13'];

const sliderEl = document.querySelector('.slider'); const slides = Array.from(sliderEl.querySelectorAll('img'));
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dotsParent = document.querySelector(".dots");
const dots = document.getElementsByClassName("dot");

const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

dots[slideIndex].classList.add("active");
Array.from(dots).forEach((el, i) => el.setAttribute("data-key", i + 1)); // Устанавлием аттрибуты (ключи)

dotsParent.addEventListener('click', function (event) {
    deleteClassActiveFromDot();
    const elementId = event.target.getAttribute("data-key");
    slideIndex = (elementId - 1 + slideCount) % slideCount;
    updateSlider();
});

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    deleteClassActiveFromDot()
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    deleteClassActiveFromDot()
    updateSlider();
}

// Функция удаления класса active для dot
function deleteClassActiveFromDot() {
    Array.from(dots).forEach((el) => el.classList.remove('active'));
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
            dots[slideIndex].classList.add("active");
        } else {
            slide.style.display = 'none';
        }
    });
}

// Инициализация слайдера
// updateSlider();