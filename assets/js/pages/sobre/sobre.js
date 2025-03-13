depoimentos = [
  {
    nome: "Nayanny Nobre",
    texto: "texto Nayanny Nobre",
    foto: "assets/images/pages/intro/intro.min.jpg",
  },
  {
    nome: "Renata Gomes",
    texto: "texto Renata Gomes",
    foto: "assets/images/pages/intro/intro.min.jpg",
  },
  {
    nome: "Dahanne Oliveira",
    texto: "texto Dahanne Oliveira",
    foto: "assets/images/pages/intro/intro.min.jpg",
  },
];

const textoSobre = document.querySelector(".sobre-texto blockquote p");
const pessoaSobre = document.querySelector(".sobre-texto cite");
const fotoSobre = document.querySelector(".sobre-foto img");
const arrowSobre = document.querySelector(".arrow-after img");

let contClick = 0;
arrowSobre.addEventListener("click", () => {
  if (contClick <= 1) {
    contClick++;
  } else {
    contClick = 0;
  }
  textoSobre.textContent = depoimentos[contClick].texto;
  pessoaSobre.textContent = depoimentos[contClick].nome;
  fotoSobre.src = depoimentos[contClick].foto;
});

function carregarDepoimentos() {
  let depoimentosHtml = "";
  depoimentos.forEach((depoimento) => {
    depoimentosHtml += `
      <div class="depoimento">
        <p>${depoimento.texto}</p>
        <span>${depoimento.nome}</span>
      </div>
    `;
  });

  document.querySelector(".depoimentos").innerHTML = depoimentosHtml;
}
