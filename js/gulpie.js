function toggleMenu () {
  const navBar = document.getElementById('mainNavigation')

  navBar.classList.toggle('hidden')
}

function onThemeChange(event) {
  const html = document.getElementsByTagName('html')
  if (event.target.value === 'dark') {
    html[0].classList.add('dark')
  } else {
    html[0].classList.remove('dark')
  }
}

const btnToggle = document.getElementById('btnMenu')
btnToggle.addEventListener('click', toggleMenu)

const themeRadios = document.getElementsByName('theme')
themeRadios.forEach((radioItem) =>
  radioItem.addEventListener('change', onThemeChange)
)
