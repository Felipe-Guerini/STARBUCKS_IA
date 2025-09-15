let circulo = document.querySelector(".circulo");
let imagemCopo = document.querySelector(".imagem-copo");

function mudarCor(cor) {
  circulo.style.backgroundColor = cor;
}

function trocaImagem(imagem) {
  imagemCopo.src = imagem;
}

document.querySelectorAll(".botao-menu").forEach((botao, index) => {
  const cores = ["#017143", "#eb7495", "#d752b1"];
  const imagens = ["img/img1.png", "img/img2.png", "img/img3.png"];

  botao.addEventListener("click", () => {
    mudarCor(cores[index]);
    trocaImagem(imagens[index]);
  });
});
