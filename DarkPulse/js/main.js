document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.prise-btn');
    const modal = document.querySelector('.purchase-window');
    const noBtn = document.querySelector('.No');
    const burgerBtn = document.querySelector('.burger-btn');
    const burger = document.getElementById('burger');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.querySelector('.close-btn');
    let selectedTariff = '';

    const toggleBtn = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'dark'){
        document.body.classList.add('dark');
        toggleBtn.textContent = '☀️';
    } else{
        toggleBtn.textContent = '🌙';
    }
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark')
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark')
            toggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light')
            toggleBtn.textContent = '🌙';
        }
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalTitle = modal.querySelector('h1');
            selectedTariff = btn.dataset.tariff;
            modal.style.display = 'flex';   // или modal.classList.add('active')
            modalTitle.textContent = `Хотите приобрести тариф ${selectedTariff}?`;
        });
    });
    noBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (burgerBtn && burger && overlay) {
        burgerBtn.addEventListener('click', () => {
        burger.classList.add('open');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      burger.classList.remove('open');
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      burger.classList.remove('open');
      overlay.classList.remove('active');
    });
  }
});