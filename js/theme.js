const storedTheme = localStorage.getItem('theme')
const themeIcon = {
  auto:'<i></i>',
  dark:'<i></i>',
  light:'<i></i>'
}

if (storedTheme != null) {
  document.documentElement.setAttribute('data-bs-theme', storedTheme)
  const btn = document.querySelector('#btn-theme');
  if(btn) btn.innerHTML = themeIcon[storedTheme]
}else{
  document.documentElement.setAttribute('data-bs-theme', 'auto')
  localStorage.setItem('theme', 'auto')
  const btn = document.querySelector('#btn-theme');
  if(btn) btn.innerHTML = themeIcon['auto']
}

function changeTheme(theme){
  document.documentElement.setAttribute('data-bs-theme', theme)
  localStorage.setItem('theme', theme)
  const btn = document.querySelector('#btn-theme');
  if(btn) btn.innerHTML = themeIcon[theme]
}
