
// HAMBURGUER
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));


// DEPOIMENTOS 
// Index do item do meio atual
let currentIndex = window.innerWidth <= 750? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
  // Se for o da esquerda diminui o valor, se não, aumenta
  if (window.innerWidth >= 751) {
    currentIndex += e.id === 'anterior'? -3 : 3;
  } else {
    currentIndex += e.id === 'anterior'? -1 : 1;
  }

  const listaDeCards = document.querySelectorAll('.depoimento');
  
  // Garantindo que o index não saia do range válido
  // OBS: Com telas maiores, sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
  if (window.innerWidth <= 750) {
    if (currentIndex < 0) {
      currentIndex = listaDeCards.length - 1;
    } else if (currentIndex > listaDeCards.length - 1) {
      currentIndex = 0;
    }
  } else {
    if (currentIndex < 1) {
      currentIndex = listaDeCards.length - 2;
    } else if (currentIndex > listaDeCards.length - 2) {
      currentIndex = 1;
    }
  }

// Movendo os cards para que o card do index esteja no meio
  listaDeCards[currentIndex].scrollIntoView({
    inline: 'center',
    block: 'nearest',
    behavior: 'smooth',
  });
}));

// Planos

// Obtenha todos os botões que devem abrir o modal
const button_1 = document.getElementById("btn-planos-1");
const button_2 = document.getElementById("btn-planos-2");
const button_3 = document.getElementById("btn-planos-3");

// Obtenha os itens
const escondido_1 = document.getElementById("esc-1");
const escondido_2 = document.getElementById("esc-2");
const escondido_3 = document.getElementById("esc-3");

// Função para abrir o item
button_1.addEventListener("click", function() {
  escondido_1.style.display = "flex"
  escondido_2.style.display = "flex"
  escondido_3.style.display = "flex"
});

button_2.addEventListener("click", function() {
  escondido_1.style.display = "flex"
  escondido_2.style.display = "flex"
  escondido_3.style.display = "flex"
});

button_3.addEventListener("click", function() {
  escondido_1.style.display = "flex"
  escondido_2.style.display = "flex"
  escondido_3.style.display = "flex"
});



