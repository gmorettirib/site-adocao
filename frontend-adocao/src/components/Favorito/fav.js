const favButtons = document.querySelectorAll('.favorite-btn');

favButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});
