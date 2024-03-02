gsap.from('.lc-block', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2
    });

function animateCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, index * 200); 
    });
  }
  window.addEventListener('load', animateCards);

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function animateCardsOnScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add('animate');
      }
    });
  }
  window.addEventListener('scroll', animateCardsOnScroll);
  window.addEventListener('load', animateCardsOnScroll);
