const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    star.classList.toggle('active');
    star.textContent = star.classList.contains('active') ? '★' : '☆';
  });
});
