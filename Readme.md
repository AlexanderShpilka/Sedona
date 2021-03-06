# Проект «Sedona»

- Ссылка на gh-pages (index): [Sedona - Главная](https://alexandershpilka.github.io/Sedona/index.html).
- Ссылка на gh-pages (catalog): [Sedona - Каталог](https://alexandershpilka.github.io/Sedona/catalog.html).

Проект Sedona - это [учебный макет](https://www.youtube.com/watch?v=JU0GkXAc3Y8&index=8&list=PLQJNT2fdCJnhoGNGl-kIVbxiiyJRZOmZZ) первого курса HTML & CSS [HTML Academy](https://htmlacademy.ru/).

---

### Особенности

#### 1. Gulp

Автоматизация процессов настроена с помощью Gulp.

#### 2. Sass

Стили написаны с использованием препроцессора Sass. Из возможностей препроцессора использованы переменные, вложенность и миксины.

#### 3. BEM

Использована методология БЭМ.

#### 4. Responsive

Минимальная ширина макета - 768px, максимальная - 1200px. Между этими ширинами сетка резиновая.

#### 5. Изображения

Все изображения оптимизированы с целью уменьшения общего веса сайта. Для ретиновых мониторов использованы соответствующие изображения. Для браузеров, поддерживающих формат webp, подключены контентные изображения также и в этом формате. Оптимизация svg с помощью консольной утилиты svgo. Оптимизация png и jpg с помощью сервиса [tinypng](https://tinypng.com/).

#### 6. JS

Всплывающее окно поиска гостиницы реализовано на JS. Функционал кнопок увеличения/уменьшения количества так же реализован с помощью JS.

#### 7. Карта

Реализация - интерактивная карта Google. В случае, если карта не загрузилась, есть фоллбек на обычное изображение карты.

#### 8. Прочее

Кнопки форм отправляют данные на реальный сервер для проверки корректности реализации форм.
В корне проекта присутствует каталог с превьюшками страниц и ТЗ.
