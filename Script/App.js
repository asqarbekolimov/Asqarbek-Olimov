document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.menu'),
          exitBtn = document.querySelector('.exit'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('.close'),
          modalBtn = document.querySelector('.btn');

    function openMenu() {
        menu.classList.add('show');
        menu.classList.remove('hide');
        burger.style.display = 'none';
        exitBtn.style.display = 'block';
    }
    function closeMenu() {
        menu.classList.add('hide');
        menu.classList.remove('show');
        burger.style.display = 'block';
        exitBtn.style.display = 'none';
    }
    
    burger.addEventListener('click', openMenu);
    exitBtn.addEventListener('click', closeMenu);

    //The moon and the sun
    const checkbox = document.querySelector('#checkbox');

    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark')
    });

    // Modal==============================

    modalBtn.addEventListener('click', () => {
        openModal();
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    })
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }

});