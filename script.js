const toggle = document.querySelector('.services__toggle');
const extra = document.querySelector('.services__extra');
const text = document.querySelector('.services__text');
const arrow = document.querySelector('.services__arrow');

toggle.addEventListener('click', () => {
  const isVisible = extra.classList.contains('show');

  if (isVisible) {
    extra.classList.remove('show');
    text.textContent = 'Показать все';
    arrow.style.transform = 'rotate(0deg)';
  } else {
    extra.classList.add('show');
    text.textContent = 'Скрыть';
    arrow.style.transform = 'rotate(180deg)';
  }
});

if (window.innerWidth <= 480) {
  new Swiper(".mySwiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
