let trilho = document.getElementById('trilho')
let conteudoinicio = document.getElementById('conteudoinicio')
let desenhoinicio = document.getElementById('desenhoinicio')
let conteudosobre = document.getElementById('conteudosobre')
let conteudohabilidades = document.getElementById('conteudohabilidades')
let conteudoprojetos = document.getElementById('conteudoprojetos')
let rodape = document.getElementById('rodape')


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    conteudoinicio.classList.toggle('dark')
    desenhoinicio.classList.toggle('dark')
    conteudosobre.classList.toggle('dark')
    conteudohabilidades.classList.toggle('dark')
    conteudoprojetos.classList.toggle('dark')
    rodape.classList.toggle('dark')
})