const header = document.querySelector('.header')

window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add('blur')
  } else {
    header.classList.remove('blur')
  }
 navbar.classList.remove('active')
}

const navbar = document.querySelector('.navbar')

document.getElementById('menu-icon').onclick = () => {
  navbar.classList.toggle('active')
  
}

