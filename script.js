// Animação ao rolar a página (fade in)
const animeCards = document.querySelectorAll('.anime-card');

window.addEventListener('scroll', () => {
  animeCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add('show');
    }
  });
});

// Destaque no menu ao clicar
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });

  const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

function responder(resposta) {
    const resultado = document.getElementById('resultado');
  
    if (resposta === 'Shoujo') {
      resultado.innerHTML = "Parabéns! Você acertou!";
      resultado.style.color = "green";
    } else {
      resultado.innerHTML = "Resposta errada. Tente novamente!";
      resultado.style.color = "red";
    }
  
    // Mostra o resultado com animação
    resultado.style.opacity = "1";
    resultado.style.transform = "scale(1)";
  }