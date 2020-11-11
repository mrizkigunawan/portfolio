const btn = document.getElementById('toggle-button')
const nav = document.getElementById('nav')
let fontsColor = localStorage.getItem('fonts')

if (fontsColor == null) {
  setTheme('dark')
} else {
  setTheme(fontsColor)
}

btn.addEventListener('click', function () {
  setTheme(this.dataset.mode)
})

function setTheme (mode) {
  if (mode === 'light') {
    btn.className = 'fas fa-fw fa-moon'
    btn.dataset.mode = 'dark'
    nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-theme'
    document.getElementById('theme-style').href = './css/dark.css'
  } else if (mode === 'dark') {
    btn.className = 'fas fa-fw fa-sun'
    btn.dataset.mode = 'light'
    nav.className = 'navbar fixed-top navbar-expand-lg navbar-light bg-theme'
    document.getElementById('theme-style').href = ''
  }

  localStorage.setItem('fonts', mode)
}

const links = document.querySelectorAll('.nav-link')
links.forEach(function(link) {
  link.addEventListener('click', function(e) {
    document.getElementById('navbarSupportedContent').classList.remove('show');
  })
})