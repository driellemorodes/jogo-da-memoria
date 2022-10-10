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

function embaralhar() {
  quantidade = ordem_das_cartas.length;
  for (indice = 0; indice < quantidade; indice = indice + 1) {
    aleatorio = Math.floor(Math.random()*quantidade)
    original = ordem_das_cartas[indice]
    ordem_das_cartas[indice] = ordem_das_cartas[aleatorio]
    ordem_das_cartas[aleatorio] = original
  }
}
embaralhar()

indice_da_primeira_carta_revelada = null;
imagem_da_primeira_carta_revelada = null;
pendente = false;

function revelar_carta(indice) {
  if (pendente === true) {
    alert("Aguarde");
    return;
  }
  url_da_imagem = ordem_das_cartas[indice];
    carta = document.getElementById(indice);
  if (carta.style.backgroundImage) {
    return
  }
  carta.style.backgroundImage = url_da_imagem;
  if (indice_da_primeira_carta_revelada === null) {
    indice_da_primeira_carta_revelada = indice;
    imagem_da_primeira_carta_revelada = url_da_imagem;
  } else {
    if (imagem_da_primeira_carta_revelada === url_da_imagem) {
      frase = document.getElementById("frase");
      frase.innerHTML = "Muito Bom!";
      pendente = true;
      setTimeout(function () {
        frase.innerHTML = "Encontre os pares:";
        pendente = false;
      }, 1000);
      indice_da_primeira_carta_revelada = null;
      imagem_da_primeira_carta_revelada = null;
    } else {
      frase = document.getElementById("frase");
      frase.innerHTML = "Errou!";
      pendente = true;
      setTimeout(function () {
        carta = document.getElementById(indice);
        carta.style.backgroundImage = null;
        carta = document.getElementById(indice_da_primeira_carta_revelada);
        carta.style.backgroundImage = null;
        indice_da_primeira_carta_revelada = null;
        imagem_da_primeira_carta_revelada = null;
        frase.innerHTML = "Encontre os pares:";
        pendente = false;
      }, 1000);
    }
  }
}

function resetar() {
    document.location.reload()
}
