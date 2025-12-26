const storedTheme = localStorage.getItem('theme')
const themeIcon = {
  auto:'<i></i>',
  dark:'<i></i>',
  light:'<i></i>'
}

if (storedTheme != null) {
  document.documentElement.setAttribute('data-bs-theme', storedTheme)
  document.querySelector('#btn-theme').innerHTML = themeIcon[storedTheme]
}else{
  document.documentElement.setAttribute('data-bs-theme', 'auto')
  localStorage.setItem('theme', 'auto')
  document.querySelector('#btn-theme').innerHTML = themeIcon[auto]
}

function changeTheme(theme){
  document.documentElement.setAttribute('data-bs-theme', theme)
  localStorage.setItem('theme', theme)
  document.querySelector('#btn-theme').innerHTML = themeIcon[theme]
}
