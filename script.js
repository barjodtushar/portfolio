console.log("Portfolio Loaded Successfully!");
/* -------------------- Dynamic JS -------------------- */

// Fade-in Content Cards on scroll
const cards = document.querySelectorAll('.content-card');
const skillBars = document.querySelectorAll('.skill-box p');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.2;

  // Animate content cards
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.classList.add('active');
    }
  });

  // Animate skill bars
  
});
