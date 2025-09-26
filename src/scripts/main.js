'use strict';

// Отримуємо елементи по ID (img = 'largeImg' і ul = 'thumbs')
const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

// Робим делегацію подій на ul = 'thumbs'
// eslint-disable-next-line no-shadow
thumbs.addEventListener('click', (event) => {
  // Відміняємо стандартну поведінку елемента <a>
  event.preventDefault();

  // Якщо клікнули на картинку, піднімаємся до посилання
  // eslint-disable-next-line max-len
  // event.target.tagName = поточний тег на який ми клікнули (повертає великим реєстром)
  const link =
    event.target.tagName === 'IMG' ? event.target.parentElement : event.target;

  // Якщо це посилання, змінюємо головне зображення
  if (link.tagName === 'A') {
    largeImg.src = link.href;
    largeImg.alt = link.title;
  }
});
