const botao = document.getElementById('menu-hamburguer')
const navbar = document.getElementById('nav-header')

botao.addEventListener('click', () =>{
    navbar.classList.toggle('active')
    botao.classList.toggle('active')
})

document.querySelectorAll('.links-nav a').forEach(link =>{
    link.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
})