function toggleMenu () {
  const navBar = document.getElementById('mainNavigation')

  navBar.classList.toggle('hidden')
}

const btnToggle = document.getElementById('btnMenu')
btnToggle.addEventListener('click', toggleMenu)
