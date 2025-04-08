const menuOpenBtn = document.querySelector('#open-btn');
const menuCloseBtn = document.querySelector('#close-btn');
const blockMenu = document.querySelector('#block-menu');

menuOpenBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-menu');
})

