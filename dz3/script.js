// Цель: Разработать веб-приложение, которое будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения. TPMVDCOA9l4-p5LTc6z-trYsNZIByaRJ8GVBt4pCKyI

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// Дополнительные задачи (по желанию):
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.


// https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&client_id=${token}

const container = document.querySelector('#photo-container');

async function photos() {
    const response = await fetch(
        `https://api.unsplash.com/photos?page=${1}&per_page=${20}&client_id=TPMVDCOA9l4-p5LTc6z-trYsNZIByaRJ8GVBt4pCKyI`
    );
    if (!response.ok) {
        throw new Error("Ошибка получения данных");
    }
    const data = await response.json();
    console.log(data);
    data.forEach((item) =>
        container.insertAdjacentHTML(
            "beforeend",
            `
            <div class="photo">
            <img src="${item.urls.raw}" alt="${item.alt_description}">
            <div class="photo-info">
                <p>Фоторгаф: ${item.user.first_name} ${item.user.last_name ? item.user.last_name: ""}</p>
                <div class="like-wrapp">
                    <p class="count-like">0</p>
                    <svg class="like" width="30px" height="30px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,1.4022827,4.4793701,1,3.5,1  C1.5670166,1,0,2.5670166,0,4.5S2,8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z" fill="#1D1D1B"/></svg>
                </div>
            </div>
        </div>
          `
        )
    );
}

photos();