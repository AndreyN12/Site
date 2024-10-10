const burger__menu = document.getElementById('burger__menu')
const head__page = document.getElementById('head__page')


function addMenu() {
  burger__menu.classList.add('blok')
  head__page.classList.add('ops')
}


function closeMenu() {
  burger__menu.classList.remove('blok')
  head__page.classList.remove('ops')
}