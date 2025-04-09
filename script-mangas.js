// Botão voltar ao topo
const botaoTopo = document.getElementById('voltar-topo');

botaoTopo.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animação dos títulos ao rolar
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.querySelector('h2').style.opacity = 1;
      sec.querySelector('h2').style.transform = 'translateY(0)';
    }
  });
});



// Texto animado digitando
const titulo = "MangáVerse";
const tituloElemento = document.getElementById('titulo-animado');

let index = 0;

function digitarTitulo() {
  if (index < titulo.length) {
    tituloElemento.innerHTML += titulo.charAt(index);
    index++;
    setTimeout(digitarTitulo, 150); // Velocidade da digitação
  } else {
    tituloElemento.style.borderRight = 'none'; // Remove o cursor piscando
  }
}

window.addEventListener('load', digitarTitulo);

const animes = [
  { nome: "Kingdom", imagem: "img2/kingdomft.jpg" },
  { nome: "Hunter x Hunter", imagem: "img2/manga-hunter-x-hunter-07-capa.jpg" },
  { nome: "Hajime no Ippo", imagem: "img2/hjippo.jpg" },
  { nome: "Vagabond", imagem: "img2/Vagabond1.jpg" },
  { nome: "Tokyo Ghoul", imagem: "img2/tkghoul.jpeg" },
  { nome: "Bleach", imagem: "img2/bleachft.jpg" },
  { nome: "Chainsaw Man", imagem: "img2/Chainsaw_Man_Volume_11_29.webp" },
  { nome: "Monster", imagem: "img2/monster.jpg" },
  { nome: "Vinland Saga", imagem: "img2/Vinland_Saga_volume_01_capa.jpg" },
  { nome: "Death Note", imagem: "img2/light.jpeg" },
  { nome: "Jujutsu Kaisen", imagem: "img2/gojoft.webp" },
  { nome: "Black Clover", imagem: "img2/blackclo.jpg" },
  { nome: "Gantz", imagem: "img2/-manga-Gantz-14.webp" },
  { nome: "One Punch Man", imagem: "img2/saitama.jpeg" },
  { nome: "Shuumatsu no Valkyrie", imagem: "img2/shuumat.jpg" },
  { nome: "Slam Dunk", imagem: "img2/slamDunk.jpg" }
];

// Pega a div do grid
const animeGrid = document.getElementById('anime-grid');

// Gera os itens dinamicamente
animes.forEach(anime => {
  const animeItem = document.createElement('div');
  animeItem.classList.add('anime-item');

  animeItem.innerHTML = `
    <img src="${anime.imagem}" alt="${anime.nome}">
    <h3>${anime.nome}</h3>
  `;

  animeGrid.appendChild(animeItem);
});