ordem_das_cartas = [
  "url('imagens/1.png')",
  "url('imagens/2.png')",
  "url('imagens/3.png')",
  "url('imagens/4.png')",
  "url('imagens/5.png')",
  "url('imagens/5.png')",
  "url('imagens/4.png')",
  "url('imagens/3.png')",
  "url('imagens/2.png')",
  "url('imagens/1.png')",
];

function revelar_carta(id){
    indice = Number.parseInt(id) - 1
    url_da_imagem = ordem_das_cartas[indice]
    carta = document.getElementById(id);
    carta.style.backgroundImage = url_da_imagem
}