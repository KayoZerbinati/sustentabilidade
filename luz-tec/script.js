document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#icon-container');
    const buttons = document.querySelectorAll('#buttons');
    const iconAbrir = document.querySelector('#icon-container > span');
    const iconFechar = document.querySelector('#icon-container .fechar > span');
  
menu.addEventListener('click', function() {
        buttons.forEach(button => {
          if (button.style.display === 'none') {
            button.style.display = 'flex';
            iconAbrir.style.display = 'none';
            iconFechar.style.display = 'flex';
          } else {
            button.style.display = 'none';
            iconAbrir.style.display = 'flex';
            iconFechar.style.display = 'none';
          }
        });
    });
});
  var menuButton = document.querySelector('.material-symbols-outlined');
var nav = document.querySelector('nav');

menuButton.addEventListener('click', function() {
  nav.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
});
