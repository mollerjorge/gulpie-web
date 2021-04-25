function toggleMenu () {
  const navBar = document.getElementById('mainNavigation')

  navBar.classList.toggle('hidden')
}

function onThemeChange(event) {
  const html = document.getElementsByTagName('html')[0]
  html.classList.toggle('dark')
}

const btnToggle = document.getElementById('btnMenu')
btnToggle.addEventListener('click', toggleMenu)

const themeRadios = document.getElementsByName('theme')
themeRadios.forEach((radioItem) =>
  radioItem.addEventListener('change', onThemeChange)
)
